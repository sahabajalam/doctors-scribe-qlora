"""FastAPI server for clinical note conversion."""

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

from src.serving.model_cache import get_pipeline
from src.utils.logging import get_logger, setup_logging

setup_logging()
logger = get_logger(__name__)

app = FastAPI(
    title="MedGeemaSOAP API",
    description="Convert messy clinical notes to SOAP format",
    version="1.0.0",
)


class NoteRequest(BaseModel):
    messy_note: str
    max_tokens: int = 512


class NoteResponse(BaseModel):
    soap_note: str
    format_valid: bool


@app.post("/convert", response_model=NoteResponse)
async def convert_note(request: NoteRequest):
    """Convert a messy clinical note to SOAP format."""
    prompt = f"""### Instruction:
Convert this messy doctor's note into formal SOAP format.

### Input:
{request.messy_note}

### Response:
"""
    try:
        pipe = get_pipeline()
        output = pipe(prompt, max_new_tokens=request.max_tokens)[0]["generated_text"]
        soap_note = output.split("### Response:")[-1].strip()

        sections = ["SUBJECTIVE:", "OBJECTIVE:", "ASSESSMENT:", "PLAN:"]
        format_valid = all(s in soap_note.upper() for s in sections)

        return NoteResponse(soap_note=soap_note, format_valid=format_valid)
    except Exception as e:
        logger.error(f"Conversion failed: {e}")
        raise HTTPException(status_code=500, detail=str(e)) from e


@app.get("/health")
async def health_check():
    """Health check endpoint."""
    return {"status": "healthy"}
