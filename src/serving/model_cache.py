"""Lazy model loading with caching."""

import logging
from functools import lru_cache

import torch
from peft import PeftModel
from transformers import AutoModelForCausalLM, AutoTokenizer, pipeline

from src.config import get_settings

logger = logging.getLogger(__name__)


@lru_cache(maxsize=1)
def get_tokenizer():
    """Load tokenizer once, cache in memory."""
    settings = get_settings()
    logger.info(f"Loading tokenizer from {settings.model_path}")
    return AutoTokenizer.from_pretrained(settings.model_path)


@lru_cache(maxsize=1)
def get_model():
    """Load model once, cache in memory."""
    settings = get_settings()
    logger.info(f"Loading model from {settings.model_path}")

    base = AutoModelForCausalLM.from_pretrained(
        settings.base_model,
        device_map="auto",
        torch_dtype=torch.bfloat16,
    )
    model = PeftModel.from_pretrained(base, settings.model_path)
    return model.merge_and_unload()


@lru_cache(maxsize=1)
def get_pipeline():
    """Get text generation pipeline."""
    return pipeline(
        "text-generation",
        model=get_model(),
        tokenizer=get_tokenizer(),
        max_new_tokens=512,
        do_sample=False,
    )
