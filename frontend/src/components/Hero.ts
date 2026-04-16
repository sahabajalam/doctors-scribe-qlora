import results from '../../comparison_results.json';

export function renderHero(container: HTMLElement) {
    const { finetuned_metrics, examples } = results;

    container.innerHTML = `
        <style>
            .hero-wrap {
                padding: 4rem 0 2.5rem;
                text-align: center;
            }
            .hero-badge {
                display: inline-flex; align-items: center; gap: 8px;
                padding: 6px 14px;
                background: rgba(0,102,204,.06);
                border: 1px solid rgba(0,102,204,.15);
                border-radius: 999px;
                font-size: 0.8125rem; font-weight: 600; color: var(--primary);
                margin-bottom: 1.25rem;
            }
            .hero-title {
                font-size: clamp(2rem, 4vw, 3rem);
                font-weight: 800;
                line-height: 1.15;
                letter-spacing: -0.02em;
                margin: 0 0 1rem;
                color: var(--text-primary);
            }
            .hero-title .accent { color: var(--primary); }
            .hero-sub {
                max-width: 640px;
                margin: 0 auto 1.75rem;
                font-size: 1.0625rem;
                line-height: 1.6;
                color: var(--text-secondary);
            }
            .hero-stats {
                display: inline-flex;
                gap: 1.25rem;
                padding: 10px 20px;
                background: #fff;
                border: 1px solid var(--border);
                border-radius: 12px;
                box-shadow: var(--shadow-sm);
                flex-wrap: wrap;
                justify-content: center;
            }
            .hero-stat { display: flex; align-items: baseline; gap: 6px; }
            .hero-stat-val { font-size: 1.125rem; font-weight: 800; color: var(--primary); letter-spacing: -0.01em; }
            .hero-stat-lbl { font-size: 0.75rem; color: var(--text-muted); font-weight: 600; text-transform: uppercase; letter-spacing: .04em; }
            .hero-divider { width: 1px; background: var(--border-light); }
            @media (max-width: 640px) {
                .hero-wrap { padding: 2.5rem 0 1.5rem; }
                .hero-divider { display: none; }
            }
        </style>
        <div class="container hero-wrap">
            <div class="hero-badge">
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                </svg>
                Fine-tuned google/medgemma-1.5-4b
            </div>

            <h1 class="hero-title">
                Unstructured Notes <span class="accent">→</span> SOAP Documentation
            </h1>

            <p class="hero-sub">
                Fine-tuned MedGemma that transforms messy doctor notes into structured SOAP format.
                Browse 54 real test cases below and compare base vs fine-tuned output side by side.
            </p>

            <div class="hero-stats">
                <div class="hero-stat">
                    <span class="hero-stat-val">${examples.length}</span>
                    <span class="hero-stat-lbl">Cases</span>
                </div>
                <div class="hero-divider"></div>
                <div class="hero-stat">
                    <span class="hero-stat-val">${(finetuned_metrics.rouge_l * 100).toFixed(1)}%</span>
                    <span class="hero-stat-lbl">ROUGE-L</span>
                </div>
                <div class="hero-divider"></div>
                <div class="hero-stat">
                    <span class="hero-stat-val">${(finetuned_metrics.bertscore_f1 * 100).toFixed(1)}%</span>
                    <span class="hero-stat-lbl">BERTScore</span>
                </div>
                <div class="hero-divider"></div>
                <div class="hero-stat">
                    <span class="hero-stat-val">${(finetuned_metrics.format_compliance * 100).toFixed(0)}%</span>
                    <span class="hero-stat-lbl">Format</span>
                </div>
            </div>
        </div>
    `;
}
