# Doctor's Scribe: Clinical Note Fine-Tuning

Fine-tuned MedGemma 1.5 4B-IT to convert messy doctor notes into structured SOAP format using QLoRA, achieving 97% cost reduction compared to GPT-4 API.

## The Problem

Doctors spend 2-3 hours daily on documentation. Using GPT-4 for note structuring costs $0.03/1K tokens:
- 500 tokens/note x 30 notes/day x 250 days = **$1,125/doctor/year**
- For a 50-doctor clinic: **$56,250/year**

## The Solution

Fine-tuned MedGemma 1.5 4B-IT with QLoRA (4-bit quantization + LoRA adapters):

| Feature | Value |
|---------|-------|
| Cost | ~$0.001/1K tokens (self-hosted) |
| Savings | 97% cost reduction |
| Privacy | PHI stays on-premise (HIPAA compliant) |
| Speed | <2 sec inference |

## Results

| Metric | Our Model | GPT-3.5 | GPT-4 |
|--------|-----------|---------|-------|
| ROUGE-L | 0.76 | 0.71 | 0.82 |
| BERTScore F1 | 0.87 | 0.84 | 0.91 |
| Format Compliance | 95% | 92% | 98% |
| Cost/1K tokens | $0.001 | $0.002 | $0.03 |

**Business Impact**: **$54,600/year savings** for a 50-doctor clinic.

## Model

The fine-tuned LoRA adapter is available on HuggingFace:
- **Model**: [sahabajalam/Med_scribe_V2](https://huggingface.co/sahabajalam/Med_scribe_V2)
- **Base Model**: google/medgemma-1.5-4b-it

## Quick Start

### Prerequisites

- Python 3.11+
- [UV](https://github.com/astral-sh/uv) package manager
- CUDA-compatible GPU (for inference)

### Installation

```bash
# Install UV if not installed
curl -LsSf https://astral.sh/uv/install.sh | sh

# Clone and install
git clone https://github.com/yourusername/doctor-scribe.git
cd doctor-scribe
uv sync --dev

# Copy environment template
cp .env.example .env
# Edit .env with your API keys
```

### Inference with Fine-tuned Model

```python
from peft import PeftModel
from transformers import AutoModelForCausalLM, AutoTokenizer

# Load base model and LoRA adapter
base_model = AutoModelForCausalLM.from_pretrained("google/medgemma-1.5-4b-it")
model = PeftModel.from_pretrained(base_model, "sahabajalam/Med_scribe_V2")
tokenizer = AutoTokenizer.from_pretrained("google/medgemma-1.5-4b-it")

# Use Gemma chat template
messages = [
    {"role": "user", "content": "Convert this messy clinical note into SOAP format:\n\npt c/o abd pain x3d, worse after meals. VS: 120/80, HR 78"}
]
input_text = tokenizer.apply_chat_template(messages, tokenize=False)
```

### Serve API

```bash
# Start FastAPI server
uv run python -m scripts.serve

# Test endpoint
curl -X POST http://localhost:8000/convert \
  -H "Content-Type: application/json" \
  -d '{"messy_note": "pt c/o abd pain x3d, worse after meals. VS: 120/80, HR 78"}'
```

## Training (Kaggle)

The model was fine-tuned on Kaggle using a T4 GPU. See `notebooks/kaggle_w_notebook.ipynb` for the full training code.

### Training Configuration

| Parameter | Value |
|-----------|-------|
| Base Model | google/medgemma-1.5-4b-it |
| Quantization | 4-bit NF4 (QLoRA) |
| LoRA Rank | 16 (alpha=32) |
| Target Modules | q_proj, v_proj, o_proj, gate_proj, up_proj, down_proj |
| Trainable Parameters | ~30M (0.69% of 4.3B) |
| Max Sequence Length | 512 |
| Training Steps | 500 |
| Batch Size | 2 (gradient accumulation: 8) |
| Effective Batch Size | 16 |
| Learning Rate | 2e-4 |
| Training Time | ~10 hours on T4 |

### Dataset

Custom clinical notes dataset covering 20 medical specialties:
- Cardiology, Dermatology, Emergency Medicine, Endocrinology
- Family/General Practice, Gastroenterology, General Surgery, Geriatrics
- Infectious Disease, Internal Medicine, Nephrology, Neurology
- OB/GYN, Oncology, Orthopedics, Pediatrics
- Physical Rehab, Psychiatry, Pulmonology, Rheumatology

**Split**: ~80% train, 10% validation, 10% test

### Training Loss

```
Step 25:  2.0016 → Step 100: 0.8718 → Step 200: 0.2660 → Step 500: 0.0217
```

## Project Structure

```
doctor-scribe/
├── src/
│   ├── config.py              # Pydantic Settings
│   ├── data/
│   │   └── prepare_alpaca.py  # Alpaca format converter
│   ├── schemas/
│   │   └── soap_note.py       # SOAP Pydantic models
│   ├── training/
│   │   ├── config.py          # LoRA/QLoRA configs
│   │   └── train.py           # Training script (reference)
│   ├── evaluation/
│   │   └── evaluate.py        # ROUGE-L, BERTScore
│   ├── serving/
│   │   ├── api.py             # FastAPI endpoint
│   │   └── model_cache.py     # Lazy model loading
│   └── utils/
│       ├── logging.py         # Centralized logging
│       ├── error_handling.py  # Safe execution decorator
│       └── cost_tracker.py    # Token cost estimation
├── scripts/
│   └── serve.py               # Server entry point
├── notebooks/
│   ├── kaggle_w_notebook.ipynb # Kaggle training notebook
│   ├── fine_tune.ipynb        # Local fine-tuning notebook
│   └── inference.ipynb        # Inference examples
├── data/
│   ├── prepare_data.py        # Data preparation script
│   ├── raw_dataset/           # Raw specialty JSONLs
│   └── processed/             # Train/val/test splits
├── tests/                     # Unit and integration tests
├── models/                    # Trained models (gitignored)
└── outputs/                   # Results (gitignored)
```

## SOAP Format

The model converts messy notes like:

```
pt c/o abd pain x3d, worse after meals. denies n/v.
VS: 120/80, HR 78, T 98.6. Abd soft, +ttp RUQ, murphy's +.
Labs: WBC 12k, AST/ALT wnl.
Likely cholecystitis. Start cipro 500mg BID, NPO, surg consult.
```

Into structured SOAP format:

```
SUBJECTIVE: 45-year-old patient presents with abdominal pain for 3 days,
worsening after meals. Denies nausea or vomiting.

OBJECTIVE: Vital signs stable (BP 120/80, HR 78, Temp 98.6°F). Abdominal
exam shows soft abdomen with tenderness in right upper quadrant. Positive
Murphy's sign. Labs show WBC 12,000 (elevated), liver enzymes within normal limits.

ASSESSMENT: Acute cholecystitis (gallbladder inflammation).

PLAN: Initiate Ciprofloxacin 500mg twice daily, maintain NPO status,
urgent surgical consultation requested.
```

## Development

```bash
# Run tests
uv run pytest

# Lint code
uv run ruff check src/

# Format code
uv run ruff format src/

# Install pre-commit hooks
uv run pre-commit install
```

## API Reference

### POST /convert

Convert a messy clinical note to SOAP format.

**Request:**
```json
{
  "messy_note": "pt c/o headache x1w, worse AM",
  "max_tokens": 512
}
```

**Response:**
```json
{
  "soap_note": "SUBJECTIVE: Patient reports...",
  "format_valid": true
}
```

### GET /health

Health check endpoint.

**Response:**
```json
{
  "status": "healthy"
}
```

## Cost Analysis

### Annual Savings (50-Doctor Clinic)

| Solution | Cost/1K Tokens | Annual Cost | Savings |
|----------|---------------|-------------|---------|
| GPT-4 | $0.03 | $5,625 | - |
| GPT-3.5 | $0.002 | $375 | 93% |
| Fine-tuned (Cloud) | $0.001 | $188 | 97% |
| Fine-tuned (Self-host) | ~$0.0001 | $19 | 99.7% |

### ROI

- **One-time training cost**: Free (Kaggle)
- **Payback period**: Immediate (self-hosted)

## License

MIT

## Acknowledgments

- [Google](https://ai.google.dev/) for MedGemma
- [Hugging Face](https://huggingface.co/) for transformers and PEFT
- [TRL](https://github.com/huggingface/trl) for SFTTrainer
- [Kaggle](https://kaggle.com/) for free GPU compute
