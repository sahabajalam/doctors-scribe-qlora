"""Error handling utilities."""

import logging
from collections.abc import Callable
from functools import wraps
from typing import Any, TypeVar

from tenacity import retry, stop_after_attempt, wait_exponential

logger = logging.getLogger(__name__)
T = TypeVar("T")


def safe_execute(
    default_return: Any = None,
    exceptions: tuple = (Exception,),
) -> Callable[[Callable[..., T]], Callable[..., T | Any]]:
    """Decorator for safe function execution with fallback."""

    def decorator(func: Callable[..., T]) -> Callable[..., T | Any]:
        @wraps(func)
        def wrapper(*args: Any, **kwargs: Any) -> T | Any:
            try:
                return func(*args, **kwargs)
            except exceptions as e:
                logger.error(f"{func.__name__} failed: {e}")
                return default_return

        return wrapper

    return decorator


# Retry decorator for API calls
retry_on_rate_limit = retry(
    stop=stop_after_attempt(3),
    wait=wait_exponential(multiplier=1, min=4, max=60),
)
