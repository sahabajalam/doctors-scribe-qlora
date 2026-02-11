"""Pytest configuration and fixtures."""

import sys
from pathlib import Path

import pytest

# Add project root to path for imports
project_root = Path(__file__).parent.parent
sys.path.insert(0, str(project_root))


@pytest.fixture
def sample_messy_note():
    """Sample messy clinical note for testing."""
    return "pt c/o abd pain x3d, worse after meals. VS: 120/80, HR 78"


@pytest.fixture
def sample_soap_note():
    """Sample SOAP formatted note for testing."""
    return """SUBJECTIVE: Patient reports abdominal pain for 3 days, worsening after meals.

OBJECTIVE: Vital signs: BP 120/80, HR 78.

ASSESSMENT: Possible gastrointestinal condition.

PLAN: Further evaluation needed."""


@pytest.fixture
def sample_raw_example():
    """Sample raw dataset example."""
    return {
        "messy_note": "pt c/o headache x1w, worse AM",
        "soap_note": "SUBJECTIVE: Headache for 1 week\nOBJECTIVE: Normal\nASSESSMENT: Tension headache\nPLAN: Ibuprofen PRN",
        "specialty": "Neurology",
        "complexity": "simple",
    }
