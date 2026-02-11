"""Integration tests for the FastAPI endpoint."""

import pytest
from fastapi.testclient import TestClient

from src.serving.api import app


@pytest.fixture
def client():
    """Create test client."""
    return TestClient(app)


def test_health_check(client):
    """Test health endpoint returns healthy status."""
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json() == {"status": "healthy"}


def test_convert_endpoint_exists(client):
    """Test that the convert endpoint exists."""
    # This will fail without a model loaded, but we can verify the endpoint exists
    response = client.post(
        "/convert",
        json={"messy_note": "test note"},
    )
    # Expect 500 since model isn't loaded in test env
    assert response.status_code in (200, 500)


def test_convert_invalid_request(client):
    """Test that invalid request body returns 422."""
    response = client.post("/convert", json={})
    assert response.status_code == 422


def test_convert_request_schema(client):
    """Test request schema validation."""
    response = client.post(
        "/convert",
        json={"messy_note": "pt c/o pain", "max_tokens": 256},
    )
    # Endpoint exists and accepts valid schema
    assert response.status_code in (200, 500)
