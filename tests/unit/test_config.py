"""Unit tests for configuration module."""

import os

import pytest

from src.config import Settings, get_settings


class TestSettings:
    def test_default_values(self):
        """Test default settings values."""
        settings = Settings()
        assert settings.lora_r == 16
        assert settings.lora_alpha == 32
        assert settings.learning_rate == 2e-4
        assert settings.num_epochs == 3
        assert settings.batch_size == 4

    def test_model_paths_default(self):
        """Test default model paths."""
        settings = Settings()
        assert "llama3-doctor-scribe" in settings.model_path
        assert "Meta-Llama-3-8B-Instruct" in settings.base_model

    def test_mlflow_tracking_uri_default(self):
        """Test default MLflow tracking URI."""
        settings = Settings()
        assert settings.mlflow_tracking_uri == "./mlruns"

    def test_settings_from_env(self, monkeypatch):
        """Test settings can be loaded from environment variables."""
        monkeypatch.setenv("OPENAI_API_KEY", "test-key")
        monkeypatch.setenv("HF_TOKEN", "test-token")

        # Clear the lru_cache to get fresh settings
        get_settings.cache_clear()
        settings = Settings()

        assert settings.openai_api_key == "test-key"
        assert settings.hf_token == "test-token"

    def test_get_settings_cached(self):
        """Test that get_settings returns cached instance."""
        get_settings.cache_clear()
        settings1 = get_settings()
        settings2 = get_settings()
        assert settings1 is settings2
