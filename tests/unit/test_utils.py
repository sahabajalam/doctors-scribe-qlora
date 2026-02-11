"""Unit tests for utility modules."""

import logging
from pathlib import Path

import pytest

from src.utils.cost_tracker import count_tokens, estimate_cost
from src.utils.error_handling import safe_execute
from src.utils.logging import get_logger, setup_logging


class TestCostTracker:
    def test_count_tokens_basic(self):
        """Test token counting for a simple string."""
        text = "Hello, world!"
        tokens = count_tokens(text, model="gpt-4")
        assert tokens > 0
        assert isinstance(tokens, int)

    def test_count_tokens_empty_string(self):
        """Test token counting for empty string."""
        tokens = count_tokens("", model="gpt-4")
        assert tokens == 0

    def test_count_tokens_medical_text(self):
        """Test token counting for medical terminology."""
        text = "pt c/o abd pain x3d, worse after meals. VS: 120/80, HR 78"
        tokens = count_tokens(text, model="gpt-4")
        assert tokens > 10

    def test_estimate_cost_gpt4(self):
        """Test cost estimation for GPT-4."""
        text = "This is a test" * 100
        cost = estimate_cost(text, model="gpt-4")
        assert cost > 0
        assert isinstance(cost, float)

    def test_estimate_cost_gpt35(self):
        """Test cost estimation for GPT-3.5 is cheaper than GPT-4."""
        text = "This is a test" * 100
        cost_gpt4 = estimate_cost(text, model="gpt-4")
        cost_gpt35 = estimate_cost(text, model="gpt-3.5-turbo")
        assert cost_gpt35 < cost_gpt4


class TestErrorHandling:
    def test_safe_execute_success(self):
        """Test safe_execute with a successful function."""

        @safe_execute(default_return=-1)
        def add(a, b):
            return a + b

        result = add(2, 3)
        assert result == 5

    def test_safe_execute_failure(self):
        """Test safe_execute with a failing function."""

        @safe_execute(default_return="default")
        def failing_func():
            raise ValueError("test error")

        result = failing_func()
        assert result == "default"

    def test_safe_execute_specific_exception(self):
        """Test safe_execute with specific exception types."""

        @safe_execute(default_return=None, exceptions=(KeyError,))
        def key_error_func():
            raise KeyError("missing key")

        result = key_error_func()
        assert result is None

    def test_safe_execute_unhandled_exception(self):
        """Test safe_execute doesn't catch unspecified exceptions."""

        @safe_execute(default_return=None, exceptions=(KeyError,))
        def value_error_func():
            raise ValueError("not a key error")

        with pytest.raises(ValueError):
            value_error_func()


class TestLogging:
    def test_get_logger(self):
        """Test getting a logger by name."""
        logger = get_logger("test_module")
        assert isinstance(logger, logging.Logger)
        assert logger.name == "test_module"

    def test_setup_logging_runs_without_error(self):
        """Test setup_logging can be called without error."""
        # basicConfig may not override existing config, so just verify it runs
        setup_logging(log_level="INFO")
        # Should not raise
        logger = get_logger("setup_test")
        logger.info("Test log message")

    def test_setup_logging_with_file(self, tmp_path):
        """Test setup_logging with file output."""
        log_file = tmp_path / "test.log"
        setup_logging(log_level="INFO", log_file=log_file)
        logger = get_logger("file_test")
        logger.info("Test message")
        assert log_file.exists()
