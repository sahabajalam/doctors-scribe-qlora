"""SOAP Note Schema for Clinical Documentation."""

from pydantic import BaseModel, Field


class SOAPNote(BaseModel):
    """Structured SOAP clinical note."""

    subjective: str = Field(..., description="Patient's chief complaint and history")
    objective: str = Field(..., description="Vital signs, physical exam, lab results")
    assessment: str = Field(..., description="Clinical diagnosis or differential")
    plan: str = Field(..., description="Treatment plan, medications, follow-up")

    def to_formatted_string(self) -> str:
        """Convert to standard SOAP format string."""
        return f"""SUBJECTIVE: {self.subjective}

OBJECTIVE: {self.objective}

ASSESSMENT: {self.assessment}

PLAN: {self.plan}"""


class MessyNote(BaseModel):
    """Raw clinical note input."""

    content: str = Field(..., description="Raw messy doctor note")
    specialty: str | None = Field(default=None, description="Medical specialty")
