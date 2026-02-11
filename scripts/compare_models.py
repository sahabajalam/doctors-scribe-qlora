"""Compare base model vs finetuned model performance."""

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


def generate_html_report(
    base_metrics: dict,
    finetuned_metrics: dict,
    examples: list[dict],
    output_path: str,
) -> None:
    """Generate HTML comparison report."""
    html = f"""<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Model Comparison Report</title>
    <style>
        body {{
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            background: #f5f5f5;
        }}
        h1 {{
            color: #2c3e50;
            border-bottom: 3px solid #3498db;
            padding-bottom: 10px;
        }}
        h2 {{
            color: #34495e;
            margin-top: 30px;
        }}
        .metrics {{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            margin: 20px 0;
        }}
        .metric-card {{
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }}
        .metric-card h3 {{
            margin-top: 0;
            color: #555;
            font-size: 14px;
            text-transform: uppercase;
        }}
        .metric-value {{
            font-size: 32px;
            font-weight: bold;
            margin: 10px 0;
        }}
        .base {{ color: #e74c3c; }}
        .finetuned {{ color: #27ae60; }}
        .delta {{
            font-size: 14px;
            padding: 4px 8px;
            border-radius: 4px;
            display: inline-block;
        }}
        .delta.positive {{
            background: #d4edda;
            color: #155724;
        }}
        .delta.negative {{
            background: #f8d7da;
            color: #721c24;
        }}
        .comparison-table {{
            width: 100%;
            border-collapse: collapse;
            background: white;
            margin: 20px 0;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }}
        .comparison-table th, .comparison-table td {{
            padding: 12px;
            text-align: left;
            border-bottom: 1px solid #ddd;
        }}
        .comparison-table th {{
            background: #3498db;
            color: white;
            font-weight: 600;
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
        .output-grid {{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
            margin: 15px 0;
        }}
        .output-box {{
            padding: 15px;
            border-radius: 4px;
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
        .base-output {{
            background: #fee;
            border-left: 4px solid #e74c3c;
        }}
        .finetuned-output {{
            background: #efe;
            border-left: 4px solid #27ae60;
        }}
        .reference-output {{
            background: #eef;
            border-left: 4px solid #3498db;
        }}
    </style>
</head>
<body>
    <h1>🔬 Model Comparison Report</h1>
    <p><strong>Base Model:</strong> google/medgemma-1.5-4b-it</p>
    <p><strong>Finetuned Model:</strong> sahabajalam/Med_scribe_V2</p>
    
    <h2>📊 Overall Metrics</h2>
    <div class="metrics">
        <div class="metric-card">
            <h3>ROUGE-L Score</h3>
            <div class="metric-value base">{base_metrics['rouge_l']:.4f}</div>
            <div style="font-size: 12px; color: #777;">Base Model</div>
            <div class="metric-value finetuned">{finetuned_metrics['rouge_l']:.4f}</div>
            <div style="font-size: 12px; color: #777;">Finetuned Model</div>
            <div class="delta {'positive' if finetuned_metrics['rouge_l'] > base_metrics['rouge_l'] else 'negative'}">
                {'+' if finetuned_metrics['rouge_l'] > base_metrics['rouge_l'] else ''}{(finetuned_metrics['rouge_l'] - base_metrics['rouge_l']):.4f} 
                ({((finetuned_metrics['rouge_l'] - base_metrics['rouge_l']) / base_metrics['rouge_l'] * 100):+.1f}%)
            </div>
        </div>
        
        <div class="metric-card">
            <h3>BERTScore F1</h3>
            <div class="metric-value base">{base_metrics['bertscore_f1']:.4f}</div>
            <div style="font-size: 12px; color: #777;">Base Model</div>
            <div class="metric-value finetuned">{finetuned_metrics['bertscore_f1']:.4f}</div>
            <div style="font-size: 12px; color: #777;">Finetuned Model</div>
            <div class="delta {'positive' if finetuned_metrics['bertscore_f1'] > base_metrics['bertscore_f1'] else 'negative'}">
                {'+' if finetuned_metrics['bertscore_f1'] > base_metrics['bertscore_f1'] else ''}{(finetuned_metrics['bertscore_f1'] - base_metrics['bertscore_f1']):.4f}
                ({((finetuned_metrics['bertscore_f1'] - base_metrics['bertscore_f1']) / base_metrics['bertscore_f1'] * 100):+.1f}%)
            </div>
        </div>
        
        <div class="metric-card">
            <h3>Format Compliance</h3>
            <div class="metric-value base">{base_metrics['format_compliance']:.1%}</div>
            <div style="font-size: 12px; color: #777;">Base Model</div>
            <div class="metric-value finetuned">{finetuned_metrics['format_compliance']:.1%}</div>
            <div style="font-size: 12px; color: #777;">Finetuned Model</div>
            <div class="delta {'positive' if finetuned_metrics['format_compliance'] > base_metrics['format_compliance'] else 'negative'}">
                {'+' if finetuned_metrics['format_compliance'] > base_metrics['format_compliance'] else ''}{(finetuned_metrics['format_compliance'] - base_metrics['format_compliance']):.1%}
                ({((finetuned_metrics['format_compliance'] - base_metrics['format_compliance']) / max(base_metrics['format_compliance'], 0.01) * 100):+.1f}%)
            </div>
        </div>
    </div>
    
    <h2>📝 Side-by-Side Examples</h2>
"""
    
    for i, ex in enumerate(examples, 1):
        html += f"""
    <div class="example">
        <h4>Example {i}</h4>
        <div class="input-note"><strong>Input (Messy Note):</strong>
{ex['input']}</div>
        
        <div class="output-grid">
            <div class="output-box reference-output">
                <h5>Reference (Ground Truth)</h5>
                <pre>{ex['reference']}</pre>
            </div>
        </div>
        
        <div class="output-grid">
            <div class="output-box base-output">
                <h5>Base Model Output</h5>
                <pre>{ex['base_prediction']}</pre>
            </div>
            
            <div class="output-box finetuned-output">
                <h5>Finetuned Model Output</h5>
                <pre>{ex['finetuned_prediction']}</pre>
            </div>
        </div>
    </div>
"""
    
    html += """
</body>
</html>
"""
    
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(html)
    
    logger.info(f"HTML report saved to {output_path}")


def compare_models(
    base_model: str,
    finetuned_model: str,
    finetuned_base: str,
    test_file: str,
    output_dir: str,
    sample_size: int | None = None,
) -> dict:
    """Compare base and finetuned models.
    
    Args:
        base_model: Base model path/name
        finetuned_model: Finetuned model adapter path/name
        finetuned_base: Base model for finetuned adapter
        test_file: Test dataset file
        output_dir: Output directory for results
        sample_size: Number of samples to test (None = all)
    
    Returns:
        dict: Comparison results
    """
    output_path = Path(output_dir)
    output_path.mkdir(parents=True, exist_ok=True)
    
    # Load test dataset
    logger.info(f"Loading test dataset from {test_file}")
    test_dataset = load_dataset("json", data_files=test_file, split="train")
    
    if sample_size:
        logger.info(f"Using {sample_size} samples for testing")
        test_dataset = test_dataset.select(range(sample_size))
    
    # Load base model
    logger.info("=" * 60)
    logger.info("LOADING BASE MODEL")
    logger.info("=" * 60)
    base_pipe, base_tokenizer = load_model_pipeline(base_model, is_peft=False)
    
    # Generate base model predictions
    logger.info("Generating predictions with base model...")
    base_predictions, references = generate_predictions(
        base_pipe, base_tokenizer, test_dataset, use_chat_template=True
    )
    
    # Clear GPU memory
    import gc
    import torch
    del base_pipe
    gc.collect()
    torch.cuda.empty_cache()
    
    # Load finetuned model
    logger.info("=" * 60)
    logger.info("LOADING FINETUNED MODEL")
    logger.info("=" * 60)
    finetuned_pipe, finetuned_tokenizer = load_model_pipeline(
        finetuned_model, is_peft=True, base_model_path=finetuned_base
    )
    
    # Generate finetuned model predictions
    logger.info("Generating predictions with finetuned model...")
    finetuned_predictions, _ = generate_predictions(
        finetuned_pipe, finetuned_tokenizer, test_dataset, use_chat_template=True
    )
    
    # Evaluate both models
    logger.info("=" * 60)
    logger.info("CALCULATING METRICS")
    logger.info("=" * 60)
    base_metrics = evaluate_model(base_predictions, references)
    finetuned_metrics = evaluate_model(finetuned_predictions, references)
    
    # Prepare comparison results
    results = {
        "base_model": base_model,
        "finetuned_model": finetuned_model,
        "num_samples": len(test_dataset),
        "base_metrics": base_metrics,
        "finetuned_metrics": finetuned_metrics,
        "improvement": {
            "rouge_l": finetuned_metrics["rouge_l"] - base_metrics["rouge_l"],
            "bertscore_f1": finetuned_metrics["bertscore_f1"] - base_metrics["bertscore_f1"],
            "format_compliance": finetuned_metrics["format_compliance"] - base_metrics["format_compliance"],
        },
    }
    
    # Save JSON results
    json_path = output_path / "comparison_results.json"
    with open(json_path, "w") as f:
        json.dump(results, f, indent=2)
    logger.info(f"Results saved to {json_path}")
    
    # Save predictions for manual review
    predictions_data = []
    for i in range(len(test_dataset)):
        predictions_data.append({
            "input": test_dataset[i]["input"],
            "reference": references[i],
            "base_prediction": base_predictions[i],
            "finetuned_prediction": finetuned_predictions[i],
        })
    
    predictions_path = output_path / "predictions.json"
    with open(predictions_path, "w") as f:
        json.dump(predictions_data, f, indent=2)
    logger.info(f"Predictions saved to {predictions_path}")
    
    # Generate HTML report with examples
    examples_for_report = predictions_data[:min(5, len(predictions_data))]  # Show first 5
    html_path = output_path / "comparison_report.html"
    generate_html_report(base_metrics, finetuned_metrics, examples_for_report, html_path)
    
    # Print summary
    logger.info("\n" + "=" * 60)
    logger.info("COMPARISON SUMMARY")
    logger.info("=" * 60)
    logger.info(f"Samples evaluated: {len(test_dataset)}")
    logger.info("\nBase Model Metrics:")
    logger.info(f"  ROUGE-L:          {base_metrics['rouge_l']:.4f}")
    logger.info(f"  BERTScore F1:     {base_metrics['bertscore_f1']:.4f}")
    logger.info(f"  Format Compliance: {base_metrics['format_compliance']:.1%}")
    logger.info("\nFinetuned Model Metrics:")
    logger.info(f"  ROUGE-L:          {finetuned_metrics['rouge_l']:.4f}")
    logger.info(f"  BERTScore F1:     {finetuned_metrics['bertscore_f1']:.4f}")
    logger.info(f"  Format Compliance: {finetuned_metrics['format_compliance']:.1%}")
    logger.info("\nImprovement:")
    logger.info(f"  ROUGE-L:          {results['improvement']['rouge_l']:+.4f}")
    logger.info(f"  BERTScore F1:     {results['improvement']['bertscore_f1']:+.4f}")
    logger.info(f"  Format Compliance: {results['improvement']['format_compliance']:+.1%}")
    logger.info("=" * 60)
    
    return results


def main():
    """Main entry point."""
    parser = argparse.ArgumentParser(description="Compare base vs finetuned model")
    parser.add_argument(
        "--base-model",
        default="google/medgemma-1.5-4b-it",
        help="Base model name/path",
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
        default="outputs/comparison",
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
    
    compare_models(
        base_model=args.base_model,
        finetuned_model=args.finetuned_model,
        finetuned_base=args.finetuned_base,
        test_file=args.test_file,
        output_dir=args.output,
        sample_size=args.sample_size,
    )


if __name__ == "__main__":
    main()
