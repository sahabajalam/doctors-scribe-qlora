"""Preprocessing and data preparation tests."""

import json
import tempfile
from pathlib import Path

from src.data.prepare_alpaca import convert_to_alpaca, format_alpaca_text


class TestConvertToAlpaca:
    def test_basic_conversion(self):
        example = {
            "messy_note": "pt c/o abd pain x3d",
            "soap_note": "SUBJECTIVE: Patient reports abdominal pain for 3 days.",
        }
        result = convert_to_alpaca(example)
        assert "instruction" in result
        assert "input" in result
        assert "output" in result

    def test_instruction_is_correct(self):
        example = {
            "messy_note": "test",
            "soap_note": "test output",
        }
        result = convert_to_alpaca(example)
        assert "SOAP" in result["instruction"]

    def test_input_matches_messy_note(self):
        messy = "pt c/o headache x1w, worse AM"
        example = {"messy_note": messy, "soap_note": "output"}
        result = convert_to_alpaca(example)
        assert result["input"] == messy

    def test_output_matches_soap_note(self):
        soap = "SUBJECTIVE: Headache for 1 week"
        example = {"messy_note": "input", "soap_note": soap}
        result = convert_to_alpaca(example)
        assert result["output"] == soap


class TestFormatAlpacaText:
    def test_format_contains_all_sections(self):
        example = {
            "instruction": "Convert note",
            "input": "messy note text",
            "output": "SOAP formatted text",
        }
        text = format_alpaca_text(example)
        assert "### Instruction:" in text
        assert "### Input:" in text
        assert "### Response:" in text

    def test_format_preserves_content(self):
        example = {
            "instruction": "Do the thing",
            "input": "some input",
            "output": "some output",
        }
        text = format_alpaca_text(example)
        assert "Do the thing" in text
        assert "some input" in text
        assert "some output" in text
