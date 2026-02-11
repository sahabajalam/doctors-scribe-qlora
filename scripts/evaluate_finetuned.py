"""Quick evaluation of finetuned model only (no base model comparison)."""

import argparse
import json
import logging
from pathlib import Path

from datasets import load_dataset

from src.evaluation.evaluate import (
    evaluate_model,
    generate_predictions,
    load_model_pipeline,
)
from src.utils.logging import setup_logging

logger = logging.getLogger(__name__)


def evaluate_finetuned_only(
    finetuned_model: str,
    finetuned_base: str,
    test_file: str,
    output_dir: str,
    sample_size: int | None = None,
) -> dict:
    """Evaluate finetuned model against ground truth.
    
    Args:
        finetuned_model: Finetuned model adapter path/name
        finetuned_base: Base model for finetuned adapter
        test_file: Test dataset file
        output_dir: Output directory for results
        sample_size: Number of samples to test (None = all)
    
    Returns:
        dict: Evaluation results
    """
    output_path = Path(output_dir)
    output_path.mkdir(parents=True, exist_ok=True)
    
    # Load test dataset
    logger.info(f"Loading test dataset from {test_file}")
    test_dataset = load_dataset("json", data_files=test_file, split="train")
    
    if sample_size:
        logger.info(f"Using {sample_size} samples for testing")
        test_dataset = test_dataset.select(range(sample_size))
    
    # Load finetuned model
    logger.info("=" * 60)
    logger.info("LOADING FINETUNED MODEL")
    logger.info("=" * 60)
    finetuned_pipe, finetuned_tokenizer = load_model_pipeline(
        finetuned_model, is_peft=True, base_model_path=finetuned_base
    )
    
    # Generate predictions
    logger.info("Generating predictions with finetuned model...")
    predictions, references = generate_predictions(
        finetuned_pipe, finetuned_tokenizer, test_dataset, use_chat_template=True
    )
    
    # Evaluate
    logger.info("=" * 60)
    logger.info("CALCULATING METRICS")
    logger.info("=" * 60)
    metrics = evaluate_model(predictions, references)
    
    # Prepare results
    results = {
        "model": finetuned_model,
        "num_samples": len(test_dataset),
        "metrics": metrics,
    }
    
    # Save JSON results
    json_path = output_path / "evaluation_results.json"
    with open(json_path, "w") as f:
        json.dump(results, f, indent=2)
    logger.info(f"Results saved to {json_path}")
    
    # Save example predictions
    examples = []
    for i in range(min(10, len(test_dataset))):
        examples.append({
            "input": test_dataset[i]["input"],
            "reference": references[i],
            "prediction": predictions[i],
            "format_compliant": all(
                section in predictions[i].upper() 
                for section in ["SUBJECTIVE:", "OBJECTIVE:", "ASSESSMENT:", "PLAN:"]
            ),
        })
    
    examples_path = output_path / "example_predictions.json"
    with open(examples_path, "w") as f:
        json.dump(examples, f, indent=2)
    logger.info(f"Example predictions saved to {examples_path}")
    
    # Generate simple HTML report
    html = f"""<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Finetuned Model Evaluation</title>
    <style>
        body {{
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
            max-width: 1000px;
            margin: 0 auto;
            padding: 20px;
            background: #f5f5f5;
        }}
        h1 {{ color: #2c3e50; border-bottom: 3px solid #27ae60; padding-bottom: 10px; }}
        h2 {{ color: #34495e; margin-top: 30px; }}
        .metrics {{
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            margin: 20px 0;
        }}
        .metric-card {{
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            text-align: center;
        }}
        .metric-card h3 {{
            margin: 0 0 10px 0;
            color: #555;
            font-size: 14px;
            text-transform: uppercase;
        }}
        .metric-value {{
            font-size: 36px;
            font-weight: bold;
            color: #27ae60;
        }}
        .example {{
            background: white;
            padding: 20px;
            margin: 20px 0;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }}
        .example h4 {{
            margin-top: 0;
            color: #3498db;
        }}
        .input-note {{
            background: #ecf0f1;
            padding: 15px;
            border-left: 4px solid #95a5a6;
            margin: 10px 0;
            font-family: monospace;
            white-space: pre-wrap;
        }}
        .output-box {{
            padding: 15px;
            border-radius: 4px;
            margin: 10px 0;
        }}
        .output-box h5 {{
            margin-top: 0;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }}
        .output-box pre {{
            margin: 0;
            white-space: pre-wrap;
            font-size: 13px;
            line-height: 1.5;
        }}
        .prediction-output {{
            background: #efe;
            border-left: 4px solid #27ae60;
        }}
        .reference-output {{
            background: #eef;
            border-left: 4px solid #3498db;
        }}
        .badge {{
            display: inline-block;
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 12px;
            font-weight: bold;
        }}
        .badge.success {{
            background: #d4edda;
            color: #155724;
        }}
        .badge.error {{
            background: #f8d7da;
            color: #721c24;
        }}
    </style>
</head>
<body>
    <h1>✅ Finetuned Model Evaluation</h1>
    <p><strong>Model:</strong> {finetuned_model}</p>
    <p><strong>Samples Evaluated:</strong> {len(test_dataset)}</p>
    
    <h2>📊 Metrics</h2>
    <div class="metrics">
        <div class="metric-card">
            <h3>ROUGE-L Score</h3>
            <div class="metric-value">{metrics['rouge_l']:.4f}</div>
        </div>
        <div class="metric-card">
            <h3>BERTScore F1</h3>
            <div class="metric-value">{metrics['bertscore_f1']:.4f}</div>
        </div>
        <div class="metric-card">
            <h3>Format Compliance</h3>
            <div class="metric-value">{metrics['format_compliance']:.1%}</div>
        </div>
    </div>
    
    <h2>📝 Example Predictions</h2>
"""
    
    for i, ex in enumerate(examples, 1):
        compliant_badge = '<span class="badge success">✓ SOAP Format</span>' if ex['format_compliant'] else '<span class="badge error">✗ Format Issue</span>'
        html += f"""
    <div class="example">
        <h4>Example {i} {compliant_badge}</h4>
        <div class="input-note"><strong>Input (Messy Note):</strong>
{ex['input']}</div>
        
        <div class="output-box reference-output">
            <h5>Reference (Ground Truth)</h5>
            <pre>{ex['reference']}</pre>
        </div>
        
        <div class="output-box prediction-output">
            <h5>Model Prediction</h5>
            <pre>{ex['prediction']}</pre>
        </div>
    </div>
"""
    
    html += """
</body>
</html>
"""
    
    html_path = output_path / "evaluation_report.html"
    with open(html_path, "w", encoding="utf-8") as f:
        f.write(html)
    logger.info(f"HTML report saved to {html_path}")
    
    # Print summary
    logger.info("\n" + "=" * 60)
    logger.info("EVALUATION SUMMARY")
    logger.info("=" * 60)
    logger.info(f"Samples evaluated: {len(test_dataset)}")
    logger.info(f"ROUGE-L:          {metrics['rouge_l']:.4f}")
    logger.info(f"BERTScore F1:     {metrics['bertscore_f1']:.4f}")
    logger.info(f"Format Compliance: {metrics['format_compliance']:.1%}")
    logger.info("=" * 60)
    logger.info(f"\nView the report: {html_path}")
    
    return results


def main():
    """Main entry point."""
    parser = argparse.ArgumentParser(
        description="Evaluate finetuned model (no base model comparison)"
    )
    parser.add_argument(
        "--finetuned-model",
        default="sahabajalam/Med_scribe_V2",
        help="Finetuned model adapter name/path",
    )
    parser.add_argument(
        "--finetuned-base",
        default="google/medgemma-1.5-4b-it",
        help="Base model for finetuned adapter",
    )
    parser.add_argument(
        "--test-file",
        default="data/processed/clinical_notes_test.jsonl",
        help="Test dataset file",
    )
    parser.add_argument(
        "--output",
        default="outputs/finetuned_eval",
        help="Output directory",
    )
    parser.add_argument(
        "--sample-size",
        type=int,
        default=None,
        help="Number of samples to test (default: all)",
    )
    
    args = parser.parse_args()
    
    setup_logging()
    
    evaluate_finetuned_only(
        finetuned_model=args.finetuned_model,
        finetuned_base=args.finetuned_base,
        test_file=args.test_file,
        output_dir=args.output,
        sample_size=args.sample_size,
    )


if __name__ == "__main__":
    main()
