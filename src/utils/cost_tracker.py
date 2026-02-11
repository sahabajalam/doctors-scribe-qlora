"""Token cost estimation utilities."""

import tiktoken


def count_tokens(text: str, model: str = "gpt-4") -> int:
    """Count tokens in text for a given model."""
    encoding = tiktoken.encoding_for_model(model)
    return len(encoding.encode(text))


def estimate_cost(text: str, model: str = "gpt-4") -> float:
    """Estimate API cost for text.

    Pricing (as of 2024):
    - GPT-4 Turbo: $0.01/1K input, $0.03/1K output
    - GPT-3.5 Turbo: $0.0005/1K input, $0.0015/1K output
    """
    tokens = count_tokens(text, model)
    pricing = {
        "gpt-4": 0.03,
        "gpt-4-turbo-preview": 0.01,
        "gpt-3.5-turbo": 0.0015,
    }
    cost_per_1k = pricing.get(model, 0.03)
    return (tokens / 1000) * cost_per_1k
