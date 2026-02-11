"""Centralized configuration using Pydantic Settings."""

from functools import lru_cache

from pydantic import ConfigDict
from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    """Application settings loaded from environment."""

    model_config = ConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        extra="ignore",
    )

    input_price_per_million: float = 3.50  # Gemini 1.5 Pro default
    output_price_per_million: float = 10.50  # Gemini 1.5 Pro default

    # API Keys
    openai_api_key: str = ""
    google_api_key: str = ""
    hf_token: str = ""
    
    # Model configuration
    gemini_model: str = "gemini-1.5-pro"  # or gemini-1.5-flash

    # MLflow
    mlflow_tracking_uri: str = "./mlruns"

    # Model paths
    model_path: str = "models/medgemma-soap-lora"
    base_model: str = "google/medgemma-1.5-4b-it"

    # Training defaults
    lora_r: int = 16
    lora_alpha: int = 32
    learning_rate: float = 2e-4
    num_epochs: int = 3
    batch_size: int = 4


@lru_cache
def get_settings() -> Settings:
    """Get cached settings instance."""
    return Settings()
