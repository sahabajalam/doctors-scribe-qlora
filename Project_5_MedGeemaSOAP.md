---
> **Copilot Log Instructions** (do not remove)
>
> When working on this project, do the following every time you make changes:
> 1. **Replace the entire `Project Details` section** with an up-to-date, comprehensive description of the project's current state (purpose, status, components, architecture, deployment, setup commands, tests, known issues, TODOs, recent changes).
> 2. Append a timestamped **Work Log** entry (use `### YYYY-MM-DD — Author`) summarizing the work, files changed, commands run, environment, errors and their resolution, tests executed, and any links to PRs/issues.
> 3. Append to the **Error & Change Log** at the end: short timestamped lines for errors fixed or notable changes (include root cause and fix summary).
>
> Required fields for `Project Details` (use these headings):
> - Purpose
> - Status (e.g., In development / Deployed)
> - Components (services, databases, models, agents)
> - Data sources
> - Architecture summary
> - Deployment targets
> - Setup & Environment (OS, Python, Node versions, env vars)
> - Run & Dev Commands (how to run locally, tests)
> - Tests & Metrics
> - Known Issues
> - TODO
> - Recent Changes (short bullets)
>
> Start each Work Log entry with `### YYYY-MM-DD — Author` and keep entries concise.
---

# Project 5: Doctor's Scribe (Clinical Note Fine-Tuning)

## Overview
Fine-tuned LLM to convert messy doctor notes into structured **SOAP format** using **QLoRA**, achieving **97% cost reduction** compared to GPT-4 API.

## Project Details
- Purpose: Fine-tune LLM for structured clinical notes with HIPAA compliance.
- Status: (update when changing)
- Components:
  - QLoRA training pipeline, FastAPI inference, local inference server
- Data sources: cleaned clinical notes
- Architecture summary: QLoRA → LoRA adapters → Inference API
- Deployment targets: On-prem GPUs (T4/P100)
- Setup & Environment:
  - Python, Hugging Face Transformers, bitsandbytes
- Run & Dev Commands:
  - `python train.py --config configs/qlora.yaml`
  - `pytest`
- Tests & Metrics: ROUGE-L, BERTScore, compliance checks
- Known Issues: (list unresolved issues)
- TODO:
  - Add privacy-preserving evaluation tests
- Recent Changes:
  - (list latest changes)


## Key Technical Features
- **QLoRA Fine-tuning**: 4-bit NF4 quantization + LoRA adapters on MedGemma-1.5-4B
- **Minimal Trainable Parameters**: ~30M params (0.69% of 4.3B)
- **HIPAA Compliant**: PHI stays on-premise (self-hosted inference)
- **Fast Inference**: < 2 second response time

## Technologies
- **Base Model**: google/medgemma-1.5-4b-it
- **Training**: QLoRA, SFTTrainer, Hugging Face Transformers
- **Backend**: FastAPI
- **Config**: Pydantic Settings
- **Evaluation**: ROUGE-L, BERTScore
- **Dev Tools**: UV, Ruff, pytest, pre-commit

## QLoRA Configuration
| Parameter | Value |
|-----------|-------|
| Quantization | 4-bit NF4 with double quantization |
| LoRA Rank | 16 (alpha=32) |
| Target Modules | q_proj, v_proj, o_proj, gate_proj, up_proj, down_proj |
| Trainable Parameters | ~30M (0.69% of 4.3B) |
| Training Hardware | T4 GPU (Kaggle) |

## Evaluation Results
| Metric | Our Model | GPT-3.5 | GPT-4 |
|--------|-----------|---------|-------|
| ROUGE-L | 0.76 | 0.71 | 0.82 |
| BERTScore F1 | 0.87 | 0.84 | 0.91 |
| Format Compliance | 95% | 92% | 98% |
| **Cost/1K tokens** | **$0.001** | $0.002 | $0.03 |

## Business Impact
| Metric | Value |
|--------|-------|
| Cost Reduction | 97% vs GPT-4 |
| Annual Savings (50-doctor clinic) | $54,600/year |
| Inference Speed | < 2 seconds |
| Privacy | HIPAA compliant (on-premise) |

## Example Transformation
**Input (Messy Note)**:
```
pt c/o abd pain x3d, worse after meals. denies n/v.
VS: 120/80, HR 78, T 98.6. Abd soft, +ttp RUQ, murphy's +.
Labs: WBC 12k, AST/ALT wnl.
Likely cholecystitis. Start cipro 500mg BID, NPO, surg consult.
```

**Output (Structured SOAP)**:
```
SUBJECTIVE: 45-year-old patient presents with abdominal pain for 3 days,
worsening after meals. Denies nausea or vomiting.

OBJECTIVE: Vital signs stable (BP 120/80, HR 78, Temp 98.6°F). Abdominal
exam shows soft abdomen with tenderness in right upper quadrant. 
Positive Murphy's sign. Labs show WBC 12,000 (elevated).

ASSESSMENT: Acute cholecystitis (gallbladder inflammation).

PLAN: Initiate Ciprofloxacin 500mg twice daily, maintain NPO status,
urgent surgical consultation requested.
```

## Interview Talking Points
- "I achieved 97% cost reduction while maintaining 95% format compliance - making LLM-powered medical documentation economically viable."
- "The model runs entirely on-premise, ensuring HIPAA compliance by keeping PHI off third-party servers."
- "I used QLoRA to fine-tune a 4B parameter model with only ~30M trainable parameters (0.69%) - reducing compute costs dramatically."

## Work Log

### Example Entry
### 2026-02-12 — GitHub Copilot
- Summary: Added Project Details template and Work Log/Change Log sections.
- Files changed: `Project_5_Doctors_Scribe.md`
- Commands run: `git add`, `git commit`
- Environment: Windows, Git
- Tests: n/a
- Notes: Template added; replace Project Details on updates.

## Error & Change Log
- 2026-02-12 — [Change] Added Project Details and logging templates.
