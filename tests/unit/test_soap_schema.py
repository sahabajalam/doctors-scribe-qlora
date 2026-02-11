"""SOAP schema tests."""

import pytest

from src.schemas.soap_note import MessyNote, SOAPNote


class TestSOAPNote:
    def test_valid_soap_note(self):
        note = SOAPNote(
            subjective="Patient has headache",
            objective="BP 120/80",
            assessment="Tension headache",
            plan="Ibuprofen 400mg PRN",
        )
        assert note.subjective == "Patient has headache"

    def test_formatted_output(self):
        note = SOAPNote(
            subjective="S",
            objective="O",
            assessment="A",
            plan="P",
        )
        output = note.to_formatted_string()
        assert "SUBJECTIVE: S" in output
        assert "OBJECTIVE: O" in output
        assert "ASSESSMENT: A" in output
        assert "PLAN: P" in output

    def test_all_fields_required(self):
        with pytest.raises(Exception):
            SOAPNote(subjective="S", objective="O")

    def test_formatted_string_has_sections_in_order(self):
        note = SOAPNote(
            subjective="Chief complaint",
            objective="Vitals normal",
            assessment="Diagnosis",
            plan="Treatment plan",
        )
        output = note.to_formatted_string()
        s_idx = output.index("SUBJECTIVE:")
        o_idx = output.index("OBJECTIVE:")
        a_idx = output.index("ASSESSMENT:")
        p_idx = output.index("PLAN:")
        assert s_idx < o_idx < a_idx < p_idx


class TestMessyNote:
    def test_handles_empty_specialty(self):
        note = MessyNote(content="pt c/o pain")
        assert note.specialty is None

    def test_with_specialty(self):
        note = MessyNote(content="pt c/o pain", specialty="Cardiology")
        assert note.specialty == "Cardiology"

    def test_content_required(self):
        with pytest.raises(Exception):
            MessyNote()
