"""Prompt snapshot tests."""

import pytest


def generate_conversion_prompt(messy_note: str) -> str:
    """Generate the conversion prompt."""
    return f"""### Instruction:
Convert this messy doctor's note into formal SOAP format.

### Input:
{messy_note}

### Response:
"""


EXPECTED_PROMPT_SNAPSHOT = """### Instruction:
Convert this messy doctor's note into formal SOAP format.

### Input:
pt c/o chest pain x2d, worse w exertion

### Response:
"""


def test_prompt_generation():
    """Test prompt doesn't change unexpectedly."""
    messy = "pt c/o chest pain x2d, worse w exertion"
    prompt = generate_conversion_prompt(messy)
    assert prompt == EXPECTED_PROMPT_SNAPSHOT


def test_prompt_contains_instruction():
    """Test prompt contains required sections."""
    prompt = generate_conversion_prompt("test note")
    assert "### Instruction:" in prompt
    assert "### Input:" in prompt
    assert "### Response:" in prompt


def test_prompt_includes_input():
    """Test prompt includes the messy note."""
    note = "pt presents w/ SOB and chest tightness"
    prompt = generate_conversion_prompt(note)
    assert note in prompt
