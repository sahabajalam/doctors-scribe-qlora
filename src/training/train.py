"""Main training script for doctor-scribe fine-tuning."""

import logging
import argparse
from pathlib import Path

import mlflow
import torch
from datasets import load_dataset
from peft import get_peft_model, prepare_model_for_kbit_training
from transformers import (
    AutoModelForCausalLM,
    AutoTokenizer,
    TrainingArguments,
)
from trl import SFTTrainer, SFTConfig

from src.training.config import LORA_CONFIG, QLORA_CONFIG
from src.utils.logging import setup_logging

logger = logging.getLogger(__name__)


def train(
    base_model_id: str = "google/medgemma-4b-pt",
    dataset_dir: str = "data/processed",
    output_dir: str = "models/doctor-scribe-lora",
    epochs: int = 3,
    batch_size: int = 4,
    grad_accum_steps: int = 4,
    learning_rate: float = 2e-4,
    max_seq_length: int = 512,
) -> None:
    """Run QLoRA fine-tuning."""
    
    # 1. Load Dataset
    data_path = Path(dataset_dir)
    train_file = data_path / "clinical_notes_train.jsonl"
    val_file = data_path / "clinical_notes_val.jsonl"
    
    if not train_file.exists() or not val_file.exists():
        raise FileNotFoundError(f"Dataset files not found in {dataset_dir}")
        
    dataset = load_dataset(
        "json",
        data_files={
            "train": str(train_file),
            "validation": str(val_file),
        },
    )
    
    logger.info(f"Loaded dataset: {dataset}")

    # 2. Load Tokenizer
    tokenizer = AutoTokenizer.from_pretrained(base_model_id, trust_remote_code=True)
    tokenizer.pad_token = tokenizer.eos_token
    tokenizer.padding_side = "right"  # Fix for fp16 training

    # 3. Load Model with Quantization
    logger.info(f"Loading base model: {base_model_id}")
    model = AutoModelForCausalLM.from_pretrained(
        base_model_id,
        quantization_config=QLORA_CONFIG,
        device_map="auto",
        trust_remote_code=True,
    )
    
    # Prepare for k-bit training
    model = prepare_model_for_kbit_training(model)
    
    # Apply LoRA adapters
    model = get_peft_model(model, LORA_CONFIG)
    model.print_trainable_parameters()

    # 4. Training Arguments
    training_args = SFTConfig(
        output_dir=output_dir,
        num_train_epochs=epochs,
        per_device_train_batch_size=batch_size,
        gradient_accumulation_steps=grad_accum_steps,
        learning_rate=learning_rate,
        logging_steps=10,
        save_strategy="epoch",
        eval_strategy="epoch",  # Renamed from evaluation_strategy
        fp16=True,  # Use fp16 for T4 (bf16 is better for Ampere+)
        max_seq_length=max_seq_length,
        dataset_text_field="text",
        packing=False,
        report_to="mlflow",
    )

    # 5. Initialize Trainer
    trainer = SFTTrainer(
        model=model,
        args=training_args,
        train_dataset=dataset["train"],
        eval_dataset=dataset["validation"],
        tokenizer=tokenizer,
    )

    # 6. Train
    logger.info("Starting training...")
    with mlflow.start_run():
        mlflow.log_params({
            "base_model": base_model_id,
            "epochs": epochs,
            "batch_size": batch_size,
            "learning_rate": learning_rate,
            "lora_r": LORA_CONFIG.r,
            "lora_alpha": LORA_CONFIG.alpha,
        })
        
        trainer.train()
        
        # Save final model
        final_save_path = Path(output_dir) / "final"
        trainer.save_model(str(final_save_path))
        logger.info(f"Model saved to {final_save_path}")


if __name__ == "__main__":
    from src.config import get_settings
    
    setup_logging()
    settings = get_settings()
    
    parser = argparse.ArgumentParser(description="Fine-tune a model on clinical notes")
    parser.add_argument("--base-model", type=str, default=settings.base_model or "google/medgemma-4b-pt")
    parser.add_argument("--dataset-dir", type=str, default="data/processed")
    parser.add_argument("--output-dir", type=str, default=settings.model_path or "models/doctor-scribe-lora")
    parser.add_argument("--epochs", type=int, default=settings.num_epochs)
    parser.add_argument("--batch-size", type=int, default=settings.batch_size)
    parser.add_argument("--grad-accum", type=int, default=4)
    parser.add_argument("--lr", type=float, default=settings.learning_rate)
    
    args = parser.parse_args()
    
    train(
        base_model_id=args.base_model,
        dataset_dir=args.dataset_dir,
        output_dir=args.output_dir,
        epochs=args.epochs,
        batch_size=args.batch_size,
        grad_accum_steps=args.grad_accum,
        learning_rate=args.lr,
    )
