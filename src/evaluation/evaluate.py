"""Evaluation metrics for clinical note generation."""

import json
import logging
import os
from pathlib import Path

import torch
from datasets import load_dataset
from dotenv import load_dotenv
from evaluate import load
from peft import PeftModel
from transformers import AutoModelForCausalLM, AutoTokenizer, pipeline

from src.config import get_settings

logger = logging.getLogger(__name__)

# Load environment variables from .env file
load_dotenv()


def load_model_pipeline(model_path: str, is_peft: bool = False, base_model_path: str | None = None):
    """Load model pipeline for inference.
    
    Args:
        model_path: Path to model (HF hub or local)
        is_peft: Whether this is a PEFT/LoRA adapter
        base_model_path: Base model path if loading PEFT adapter
    
    Returns:
        tuple: (pipeline, tokenizer)
    """
    logger.info(f"Loading model from {model_path}")
    
    # Get HF token from environment
    hf_token = os.getenv("HF_TOKEN")
    if hf_token:
        logger.info("Using HF_TOKEN from environment for authentication")
    else:
        logger.warning("No HF_TOKEN found in environment - may fail for gated models")
    
    if is_peft:
        if not base_model_path:
            raise ValueError("base_model_path required when is_peft=True")
        
        logger.info(f"Loading base model: {base_model_path}")
        base_model = AutoModelForCausalLM.from_pretrained(
            base_model_path,
            device_map="auto",
            torch_dtype=torch.float16,
            token=hf_token,
        )
        
        logger.info(f"Loading PEFT adapter: {model_path}")
        model = PeftModel.from_pretrained(base_model, model_path, token=hf_token)
        tokenizer = AutoTokenizer.from_pretrained(base_model_path, token=hf_token)
    else:
        logger.info(f"Loading model: {model_path}")
        tokenizer = AutoTokenizer.from_pretrained(model_path, token=hf_token)
        model = AutoModelForCausalLM.from_pretrained(
            model_path,
            device_map="auto",
            torch_dtype=torch.float16,
            token=hf_token,
        )
    
    pipe = pipeline(
        "text-generation",
        model=model,
        tokenizer=tokenizer,
        max_new_tokens=512,
        do_sample=False,
    )
    
    return pipe, tokenizer


def generate_predictions(
    pipe,
    tokenizer,
    test_dataset,
    use_chat_template: bool = True,
    max_samples: int | None = None,
) -> tuple[list[str], list[str]]:
    """Generate predictions from a model pipeline.
    
    Args:
        pipe: Transformers pipeline
        tokenizer: Tokenizer (for chat template)
        test_dataset: Dataset with instruction/input/output fields
        use_chat_template: Whether to use Gemma chat template
        max_samples: Limit number of samples (for testing)
    
    Returns:
        tuple: (predictions, references)
    """
    predictions = []
    references = []
    
    dataset = test_dataset if max_samples is None else test_dataset.select(range(max_samples))
    
    logger.info(f"Generating predictions for {len(dataset)} examples")
    
    for i, example in enumerate(dataset):
        if use_chat_template and hasattr(tokenizer, 'apply_chat_template'):
            # Use Gemma chat template
            messages = [
                {
                    "role": "user",
                    "content": f"{example['instruction']}\n\n{example['input']}"
                }
            ]
            prompt = tokenizer.apply_chat_template(messages, tokenize=False, add_generation_prompt=True)
        else:
            # Fallback to Alpaca format
            prompt = f"""### Instruction:
{example["instruction"]}

### Input:
{example["input"]}

### Response:
"""
        
        output = pipe(prompt, return_full_text=False)[0]["generated_text"]
        prediction = output.strip()
        
        predictions.append(prediction)
        references.append(example["output"])
        
        if (i + 1) % 10 == 0:
            logger.info(f"Processed {i + 1}/{len(dataset)} examples")
    
    return predictions, references


def evaluate_model(predictions: list[str], references: list[str], per_example: bool = False) -> dict:
    """Evaluate predictions against references using ROUGE-L, BERTScore, and format compliance.
    
    Args:
        predictions: Model predictions
        references: Ground truth references
        per_example: If True, return per-example metrics
    
    Returns:
        dict: Metrics (aggregated or per-example)
    """
    rouge = load("rouge")
    bertscore = load("bertscore")

    # ROUGE-L
    rouge_scores = rouge.compute(
        predictions=predictions,
        references=references,
        rouge_types=["rougeL"],
    )

    # BERTScore
    bert_scores = bertscore.compute(
        predictions=predictions,
        references=references,
        model_type="microsoft/deberta-large-mnli",
    )

    # Format compliance (all 4 SOAP sections present)
    sections = ["SUBJECTIVE:", "OBJECTIVE:", "ASSESSMENT:", "PLAN:"]
    format_compliant = [
        all(section in pred.upper() for section in sections) for pred in predictions
    ]
    format_compliance = sum(format_compliant) / len(predictions)

    if per_example:
        return {
            "rouge_l_scores": rouge_scores["rougeL"],
            "bertscore_f1_scores": bert_scores["f1"],
            "format_compliant": format_compliant,
            "rouge_l": rouge_scores["rougeL"],
            "bertscore_f1": sum(bert_scores["f1"]) / len(bert_scores["f1"]),
            "format_compliance": format_compliance,
        }
    
    return {
        "rouge_l": rouge_scores["rougeL"],
        "bertscore_f1": sum(bert_scores["f1"]) / len(bert_scores["f1"]),
        "format_compliance": format_compliance,
    }


def run_evaluation(
    model_path: str | None = None,
    test_file: str = "data/processed/clinical_notes_test.jsonl",
    output_file: str = "outputs/evaluation_results.json",
    is_peft: bool = False,
    base_model_path: str | None = None,
    max_samples: int | None = None,
) -> dict:
    """Run full evaluation on the test set.
    
    Args:
        model_path: Path to model
        test_file: Path to test data
        output_file: Path to save results
        is_peft: Whether model is PEFT adapter
        base_model_path: Base model if using PEFT
        max_samples: Limit samples for testing
    
    Returns:
        dict: Evaluation results
    """
    settings = get_settings()
    model_path = model_path or settings.model_path

    # Load test data
    test_dataset = load_dataset("json", data_files=test_file, split="train")

    # Load model
    pipe, tokenizer = load_model_pipeline(model_path, is_peft, base_model_path)

    # Generate predictions
    predictions, references = generate_predictions(
        pipe, tokenizer, test_dataset, use_chat_template=True, max_samples=max_samples
    )

    # Calculate metrics
    results = evaluate_model(predictions, references)

    # Save results
    output_path = Path(output_file)
    output_path.parent.mkdir(parents=True, exist_ok=True)
    with open(output_path, "w") as f:
        json.dump(results, f, indent=2)

    logger.info(f"Evaluation results: {results}")
    logger.info(f"Results saved to {output_file}")

    return results


if __name__ == "__main__":
    from src.utils.logging import setup_logging

    setup_logging()
    run_evaluation()
