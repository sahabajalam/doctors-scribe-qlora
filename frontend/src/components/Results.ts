import results from '../../comparison_results.json';

export function renderMetrics(container: HTMLElement) {
    const { base_metrics, finetuned_metrics } = results;

    const rougeImprovement = ((finetuned_metrics.rouge_l - base_metrics.rouge_l) / base_metrics.rouge_l * 100).toFixed(1);
    const bertImprovement = ((finetuned_metrics.bertscore_f1 - base_metrics.bertscore_f1) / base_metrics.bertscore_f1 * 100).toFixed(1);
    const formatImprovement = ((finetuned_metrics.format_compliance - base_metrics.format_compliance) / base_metrics.format_compliance * 100).toFixed(1);

    const rougeFt = (finetuned_metrics.rouge_l * 100).toFixed(1);
    const rougeBase = (base_metrics.rouge_l * 100).toFixed(1);
    const bertFt = (finetuned_metrics.bertscore_f1 * 100).toFixed(1);
    const bertBase = (base_metrics.bertscore_f1 * 100).toFixed(1);
    const fmtFt = (finetuned_metrics.format_compliance * 100).toFixed(0);
    const fmtBase = (base_metrics.format_compliance * 100).toFixed(0);

    container.innerHTML = `
        <style>
            .metrics-grid {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 1.5rem;
                margin-bottom: 3rem;
            }
            @media (max-width: 768px) {
                .metrics-grid {
                    grid-template-columns: 1fr;
                    gap: 1rem;
                }
            }
        </style>
        <div id="metrics" class="section" style="background: linear-gradient(180deg, #FAFBFC 0%, #F0F4F8 100%); padding: 5rem 0;">
            <div class="container">
                <!-- Header -->
                <div class="text-center" style="margin-bottom: 3.5rem;">
                    <div style="display: inline-flex; align-items: center; gap: 8px; padding: 6px 16px; background: rgba(0,102,204,.06); border: 1px solid rgba(0,102,204,.12); border-radius: 20px; font-size: 0.8125rem; font-weight: 600; color: var(--primary); margin-bottom: 1.25rem;">
                        <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
                        Performance Evaluation
                    </div>
                    <h2 style="font-size: 2.25rem; font-weight: 800; color: var(--text-primary); margin: 0 0 0.75rem; letter-spacing: -0.02em;">Quantitative Results</h2>
                    <p style="max-width: 600px; margin: 0 auto; color: var(--text-secondary); font-size: 1.0625rem; line-height: 1.6;">
                        Side-by-side performance comparison between the base MedGemma model and our fine-tuned AlloyRX model.
                    </p>
                </div>

                <!-- Metrics Grid -->
                <div class="metrics-grid">

                    <!-- ROUGE-L -->
                    <div style="background: #fff; border-radius: 16px; padding: 2rem; border: 1px solid rgba(0,0,0,.06); box-shadow: 0 4px 16px rgba(0,0,0,.04); position: relative; overflow: hidden;">
                        <div style="position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, var(--primary), #3B82F6);"></div>
                        <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 1.25rem;">
                            <div style="width: 36px; height: 36px; border-radius: 10px; background: rgba(0,102,204,.08); display: flex; align-items: center; justify-content: center;">
                                <svg width="18" height="18" fill="none" stroke="var(--primary)" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
                            </div>
                            <div>
                                <div style="font-size: 0.75rem; font-weight: 600; color: var(--text-muted); text-transform: uppercase; letter-spacing: .06em;">ROUGE-L Score</div>
                            </div>
                        </div>
                        <div style="font-size: 2.5rem; font-weight: 800; color: var(--primary); line-height: 1; margin-bottom: .25rem; letter-spacing: -.02em;">+${rougeImprovement}%</div>
                        <div style="font-size: 0.8125rem; color: var(--text-muted); margin-bottom: 1.25rem;">improvement over base model</div>

                        <!-- Comparison Bars -->
                        <div style="display: flex; flex-direction: column; gap: 8px;">
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <span style="font-size: 0.6875rem; color: var(--text-muted); width: 62px; flex-shrink: 0;">Fine-tuned</span>
                                <div style="flex: 1; height: 6px; background: #F0F0F0; border-radius: 3px; overflow: hidden;">
                                    <div style="width: ${rougeFt}%; height: 100%; background: linear-gradient(90deg, var(--primary), #3B82F6); border-radius: 3px;"></div>
                                </div>
                                <span style="font-size: 0.75rem; font-weight: 700; color: var(--primary); width: 42px; text-align: right;">${rougeFt}%</span>
                            </div>
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <span style="font-size: 0.6875rem; color: var(--text-muted); width: 62px; flex-shrink: 0;">Base</span>
                                <div style="flex: 1; height: 6px; background: #F0F0F0; border-radius: 3px; overflow: hidden;">
                                    <div style="width: ${rougeBase}%; height: 100%; background: #D1D5DB; border-radius: 3px;"></div>
                                </div>
                                <span style="font-size: 0.75rem; font-weight: 600; color: var(--text-muted); width: 42px; text-align: right;">${rougeBase}%</span>
                            </div>
                        </div>
                    </div>

                    <!-- BERTScore -->
                    <div style="background: #fff; border-radius: 16px; padding: 2rem; border: 1px solid rgba(0,0,0,.06); box-shadow: 0 4px 16px rgba(0,0,0,.04); position: relative; overflow: hidden;">
                        <div style="position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, var(--secondary), #34D399);"></div>
                        <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 1.25rem;">
                            <div style="width: 36px; height: 36px; border-radius: 10px; background: rgba(0,168,107,.08); display: flex; align-items: center; justify-content: center;">
                                <svg width="18" height="18" fill="none" stroke="var(--secondary)" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                            </div>
                            <div>
                                <div style="font-size: 0.75rem; font-weight: 600; color: var(--text-muted); text-transform: uppercase; letter-spacing: .06em;">BERTScore F1</div>
                            </div>
                        </div>
                        <div style="font-size: 2.5rem; font-weight: 800; color: var(--secondary); line-height: 1; margin-bottom: .25rem; letter-spacing: -.02em;">+${bertImprovement}%</div>
                        <div style="font-size: 0.8125rem; color: var(--text-muted); margin-bottom: 1.25rem;">semantic accuracy gain</div>

                        <div style="display: flex; flex-direction: column; gap: 8px;">
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <span style="font-size: 0.6875rem; color: var(--text-muted); width: 62px; flex-shrink: 0;">Fine-tuned</span>
                                <div style="flex: 1; height: 6px; background: #F0F0F0; border-radius: 3px; overflow: hidden;">
                                    <div style="width: ${bertFt}%; height: 100%; background: linear-gradient(90deg, var(--secondary), #34D399); border-radius: 3px;"></div>
                                </div>
                                <span style="font-size: 0.75rem; font-weight: 700; color: var(--secondary); width: 42px; text-align: right;">${bertFt}%</span>
                            </div>
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <span style="font-size: 0.6875rem; color: var(--text-muted); width: 62px; flex-shrink: 0;">Base</span>
                                <div style="flex: 1; height: 6px; background: #F0F0F0; border-radius: 3px; overflow: hidden;">
                                    <div style="width: ${bertBase}%; height: 100%; background: #D1D5DB; border-radius: 3px;"></div>
                                </div>
                                <span style="font-size: 0.75rem; font-weight: 600; color: var(--text-muted); width: 42px; text-align: right;">${bertBase}%</span>
                            </div>
                        </div>
                    </div>

                    <!-- Format Compliance -->
                    <div style="background: #fff; border-radius: 16px; padding: 2rem; border: 1px solid rgba(0,0,0,.06); box-shadow: 0 4px 16px rgba(0,0,0,.04); position: relative; overflow: hidden;">
                        <div style="position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, #8B5CF6, #A78BFA);"></div>
                        <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 1.25rem;">
                            <div style="width: 36px; height: 36px; border-radius: 10px; background: rgba(139,92,246,.08); display: flex; align-items: center; justify-content: center;">
                                <svg width="18" height="18" fill="none" stroke="#8B5CF6" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                            </div>
                            <div>
                                <div style="font-size: 0.75rem; font-weight: 600; color: var(--text-muted); text-transform: uppercase; letter-spacing: .06em;">Format Compliance</div>
                            </div>
                        </div>
                        <div style="font-size: 2.5rem; font-weight: 800; color: #8B5CF6; line-height: 1; margin-bottom: .25rem; letter-spacing: -.02em;">+${formatImprovement}%</div>
                        <div style="font-size: 0.8125rem; color: var(--text-muted); margin-bottom: 1.25rem;">SOAP format adherence</div>

                        <div style="display: flex; flex-direction: column; gap: 8px;">
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <span style="font-size: 0.6875rem; color: var(--text-muted); width: 62px; flex-shrink: 0;">Fine-tuned</span>
                                <div style="flex: 1; height: 6px; background: #F0F0F0; border-radius: 3px; overflow: hidden;">
                                    <div style="width: ${fmtFt}%; height: 100%; background: linear-gradient(90deg, #8B5CF6, #A78BFA); border-radius: 3px;"></div>
                                </div>
                                <span style="font-size: 0.75rem; font-weight: 700; color: #8B5CF6; width: 42px; text-align: right;">${fmtFt}%</span>
                            </div>
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <span style="font-size: 0.6875rem; color: var(--text-muted); width: 62px; flex-shrink: 0;">Base</span>
                                <div style="flex: 1; height: 6px; background: #F0F0F0; border-radius: 3px; overflow: hidden;">
                                    <div style="width: ${fmtBase}%; height: 100%; background: #D1D5DB; border-radius: 3px;"></div>
                                </div>
                                <span style="font-size: 0.75rem; font-weight: 600; color: var(--text-muted); width: 42px; text-align: right;">${fmtBase}%</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- CTA -->
                <div class="text-center">
                    <a href="/comparison.html" style="display: inline-flex; align-items: center; gap: 8px; padding: 12px 28px; background: var(--primary); color: #fff; border-radius: 10px; font-weight: 600; font-size: 0.9375rem; text-decoration: none; box-shadow: 0 4px 12px rgba(0,102,204,.25); transition: all .2s;" onmouseover="this.style.transform='translateY(-1px)';this.style.boxShadow='0 6px 20px rgba(0,102,204,.3)'" onmouseout="this.style.transform='translateY(0)';this.style.boxShadow='0 4px 12px rgba(0,102,204,.25)'">
                        View Detailed Side-by-Side Comparison
                        <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
                    </a>
                </div>
            </div>
        </div>
    `;
}

export function renderDetailedComparisonSection(container: HTMLElement) {
    const { examples } = results;

    // Sort examples: first 15 by longest input, then remaining cases
    const sortedByLength = [...examples].sort((a: any, b: any) => b.input.length - a.input.length);
    const top15Longest = sortedByLength.slice(0, 15);
    const remaining = sortedByLength.slice(15);
    const reorderedExamples = [...top15Longest, ...remaining];

    // ── Inject scoped CSS once ──────────────────────────────────────────
    if (!document.getElementById('nv-styles')) {
        const style = document.createElement('style');
        style.id = 'nv-styles';
        style.textContent = `
            /* ── Note Viewer Shell ─────────────────────────────────── */
            .nv-shell {
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-template-rows: auto minmax(0, 1fr);
                height: calc(100vh - 100px);
                border: 1px solid var(--border);
                border-radius: 12px;
                overflow: hidden;
                box-shadow: 0 4px 24px rgba(0,0,0,.06), 0 1px 4px rgba(0,0,0,.04);
                background: #fff;
            }

            /* ── Toolbar ──────────────────────────────────────────── */
            .nv-toolbar { display: contents; }
            .nv-content { display: contents; }

            .nv-toolbar-left {
                grid-column: 1;
                grid-row: 1;
                display: flex;
                align-items: center;
                gap: 10px;
                padding: 10px 20px;
                background: linear-gradient(180deg, #FAFBFC 0%, #F5F6F8 100%);
                border-bottom: 1px solid var(--border-light);
                border-right: 1px solid var(--border-light);
            }
            .nv-toolbar-right {
                grid-column: 2;
                grid-row: 1;
                display: flex;
                align-items: center;
                gap: 10px;
                padding: 10px 20px;
                justify-content: space-between;
                background: linear-gradient(180deg, #FAFBFC 0%, #F5F6F8 100%);
                border-bottom: 1px solid var(--border-light);
            }

            .nv-label {
                margin: 0;
                font-size: 0.75rem;
                font-weight: 700;
                color: var(--text-primary);
                text-transform: uppercase;
                letter-spacing: 0.08em;
                white-space: nowrap;
                display: flex;
                align-items: center;
                gap: 8px;
            }
            .nv-label .nv-dot {
                width: 8px; height: 8px;
                border-radius: 50%;
                flex-shrink: 0;
            }
            .nv-label .nv-dot--green  { background: var(--secondary); }
            .nv-label .nv-dot--blue   { background: var(--primary); }

            .nv-select {
                padding: 5px 28px 5px 10px;
                border: 1px solid var(--border);
                border-radius: 6px;
                background: #fff url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%23888'/%3E%3C/svg%3E") right 10px center / 10px no-repeat;
                font-size: 0.8125rem;
                color: var(--text-primary);
                cursor: pointer;
                appearance: none;
                -webkit-appearance: none;
                transition: border-color .15s;
            }
            .nv-select:hover  { border-color: var(--primary); }
            .nv-select:focus  { outline: none; border-color: var(--primary); box-shadow: 0 0 0 3px rgba(0,102,204,.08); }

            /* ── Segmented Control ────────────────────────────────── */
            .nv-seg {
                display: inline-flex;
                gap: 2px;
                padding: 3px;
                background: #EBEDF0;
                border-radius: 8px;
            }
            .nv-seg-btn {
                padding: 4px 12px;
                border: none;
                border-radius: 6px;
                font-size: 0.75rem;
                font-weight: 500;
                cursor: pointer;
                color: var(--text-muted);
                background: transparent;
                transition: all .2s ease;
                white-space: nowrap;
            }
            .nv-seg-btn:hover:not(.active) { color: var(--text-primary); background: rgba(255,255,255,.5); }
            .nv-seg-btn.active {
                background: #fff;
                color: var(--primary);
                font-weight: 600;
                box-shadow: 0 1px 3px rgba(0,0,0,.1), 0 1px 2px rgba(0,0,0,.04);
            }

            /* ── Content Panes ────────────────────────────────────── */
            .nv-pane {
                overflow-y: auto;
                padding: 20px;
                scrollbar-width: thin;
                scrollbar-color: #D1D5DB transparent;
            }
            .nv-pane::-webkit-scrollbar { width: 6px; }
            .nv-pane::-webkit-scrollbar-track { background: transparent; }
            .nv-pane::-webkit-scrollbar-thumb { background: #D1D5DB; border-radius: 3px; }
            .nv-pane::-webkit-scrollbar-thumb:hover { background: #9CA3AF; }

            .nv-pane--left {
                grid-column: 1;
                grid-row: 2;
                border-right: 1px solid var(--border-light);
                background: #FAFBFC;
            }
            .nv-pane--right {
                grid-column: 2;
                grid-row: 2;
                background: #fff;
            }

            /* ── Mobile Layout ────────────────────────────────────── */
            @media (max-width: 768px) {
                /* Hide description on mobile */
                .nv-page-desc { display: none; }

                .nv-shell {
                    grid-template-columns: 1fr;
                    grid-template-rows: auto minmax(250px, 35vh) auto minmax(250px, 45vh);
                    height: auto;
                    max-height: none;
                    overflow: visible;
                    border-radius: 8px;
                }

                /* Toolbar stacking */
                .nv-toolbar-left {
                    grid-column: 1; grid-row: 1;
                    border-right: none;
                    flex-wrap: wrap;
                    gap: 8px;
                    padding: 10px 12px;
                }
                .nv-pane--left {
                    grid-column: 1; grid-row: 2;
                    border-right: none;
                    border-bottom: 1px solid var(--border-light);
                }
                .nv-toolbar-right {
                    grid-column: 1; grid-row: 3;
                    border-top: 1px solid var(--border-light);
                    flex-wrap: wrap;
                    gap: 8px;
                    padding: 10px 12px;
                }
                .nv-pane--right {
                    grid-column: 1; grid-row: 4;
                }

                /* Smaller spacing */
                .nv-pane { padding: 12px; }
                .nv-note { padding: 14px; border-radius: 10px; font-size: 0.875rem; line-height: 1.5; }

                /* Touch-friendly controls */
                .nv-select { padding: 8px 30px 8px 10px; font-size: 0.875rem; border-radius: 8px; }
                .nv-seg { padding: 4px; border-radius: 10px; }
                .nv-seg-btn { padding: 6px 14px; font-size: 0.8125rem; border-radius: 8px; }
                .nv-label { font-size: 0.6875rem; }

                /* Custom button mobile */
                #custom-mode-btn { margin-left: 0 !important; padding: 8px 14px; font-size: 0.8125rem; }

                /* Custom textarea */
                .nv-custom-textarea { min-height: 160px; font-size: 0.875rem; border-radius: 10px; }
                .nv-generate-btn { width: 100%; justify-content: center; padding: 12px; }
            }

            /* ── Note Cards ───────────────────────────────────────── */
            .nv-note {
                padding: 24px;
                border-radius: 16px;
                font-size: 0.9375rem;
                line-height: 1.6;
                color: #374151;
                height: 100%;
                overflow-y: auto;
                box-shadow: 0 1px 2px rgba(0,0,0,0.05);
            }
            .nv-note--input {
                background: #fff;
                border: 1px solid #E5E7EB;
            }
            .nv-note--finetuned {
                background: rgba(0,102,204,.02);
                border: 1px solid rgba(0,102,204,.15);
            }
            .nv-note--base {
                background: #FEF3C7;
                border: 1px solid #FDE68A;
                color: #92400E;
            }
            .nv-note--reference {
                background: #ECFDF5;
                border: 1px solid #A7F3D0;
                color: #065F46;
            }
            .nv-badge {
                display: inline-flex;
                align-items: center;
                gap: 4px;
                margin-top: 10px;
                float: right;
                font-size: 0.7rem;
                font-weight: 600;
                color: var(--primary);
                letter-spacing: .02em;
            }

            /* ── SOAP Headings ────────────────────────────────────── */
            .soap-h1 {
                font-weight: 700;
                font-size: 0.875rem;
                color: var(--primary);
                margin: 1.25rem 0 .5rem;
                padding-bottom: .4rem;
                border-bottom: 2px solid var(--primary);
                text-transform: uppercase;
                letter-spacing: .06em;
            }
            .soap-h1:first-child { margin-top: 0; }
            .soap-h2 { font-weight: 600; font-size: 0.875rem; color: var(--text-primary); margin: .75rem 0 .35rem; }
            .soap-h3 { font-weight: 600; font-size: 0.8125rem; color: var(--text-secondary); margin: .5rem 0 .2rem; }
            .soap-bold { font-weight: 600; color: var(--text-primary); }

            /* ── Output panel animation ───────────────────────────── */
            .output-panel { animation: nvFadeIn .25s ease-out; }
            @keyframes nvFadeIn { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); } }

            /* ── Custom Input Mode ────────────────────────────────── */
            .nv-custom-textarea {
                width: 100%;
                min-height: 200px;
                padding: 16px;
                border: 1px solid #E5E7EB;
                border-radius: 16px;
                font-family: 'Inter', sans-serif;
                font-size: 0.9375rem;
                line-height: 1.75;
                color: var(--text-primary);
                background: #fff;
                resize: vertical;
                outline: none;
                transition: border-color .2s, box-shadow .2s;
                box-shadow: 0 1px 2px rgba(0,0,0,.03);
            }
            .nv-custom-textarea:focus {
                border-color: var(--primary);
                box-shadow: 0 0 0 3px rgba(0,102,204,.08);
            }
            .nv-custom-textarea::placeholder {
                color: #9CA3AF;
            }
            .nv-generate-btn {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                margin-top: 12px;
                padding: 10px 24px;
                background: var(--primary);
                color: #fff;
                border: none;
                border-radius: 8px;
                font-size: 0.875rem;
                font-weight: 600;
                cursor: pointer;
                transition: all .2s;
            }
            .nv-generate-btn:hover {
                background: #0052a3;
                transform: translateY(-1px);
                box-shadow: 0 4px 12px rgba(0,102,204,.25);
            }
            .nv-generate-btn:disabled {
                opacity: 0.6;
                cursor: not-allowed;
                transform: none;
                box-shadow: none;
            }
            .nv-placeholder {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                height: 100%;
                color: #9CA3AF;
                text-align: center;
                gap: 1rem;
            }
            .nv-placeholder svg { opacity: 0.4; }
            .nv-typing-dots {
                display: flex;
                gap: 4px;
                align-items: center;
                justify-content: center;
                padding: 2rem 0;
            }
            .nv-typing-dots span {
                width: 10px; height: 10px;
                background: var(--primary);
                border-radius: 50%;
                opacity: 0.3;
                animation: nvDotBounce 1.4s infinite ease-in-out both;
            }
            .nv-typing-dots span:nth-child(1) { animation-delay: 0s; }
            .nv-typing-dots span:nth-child(2) { animation-delay: 0.16s; }
            .nv-typing-dots span:nth-child(3) { animation-delay: 0.32s; }
            @keyframes nvDotBounce {
                0%, 80%, 100% { transform: scale(0.6); opacity: 0.3; }
                40% { transform: scale(1); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
    }

    // ── Build HTML ──────────────────────────────────────────────────────
    container.innerHTML = `
        <div class="section" style="background: var(--bg-surface); padding-bottom: 2rem;">
            <div class="container">
                <div class="text-center mb-12 nv-page-desc">
                     <p style="
                        font-family: 'Inter', sans-serif;
                        font-size: 1.5rem;
                        font-weight: 800;
                        background: linear-gradient(90deg, #111827, #3B82F6, #8B5CF6);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        background-clip: text;
                        margin: 0 auto;
                        max-width: 100%;
                        line-height: 1.4;
                        letter-spacing: -0.02em;
                     ">
                        Explore how the fine-tuned Google/medgemma-1.5-4b model improves upon the base model with side-by-side examples across 54 test cases.
                    </p>
                </div>

                <!-- Note Viewer Shell -->
                <div class="nv-shell">
                    <!-- Toolbar -->
                    <div class="nv-toolbar">
                        <div class="nv-toolbar-left">
                            <h4 class="nv-label"><span class="nv-dot nv-dot--green"></span> Input Note</h4>
                            <select id="case-selector" class="nv-select">
                                ${reorderedExamples.map((_: any, idx: number) =>
        `<option value="${idx}">Case ${idx + 1}</option>`
    ).join('')}
                            </select>
                        </div>
                        <div class="nv-toolbar-right">
                            <h4 id="view-header-sticky" class="nv-label"><span class="nv-dot nv-dot--blue"></span> Fine-tuned SOAP Note</h4>
                            <div class="nv-seg">
                                <button class="nv-seg-btn active" data-target="view-finetuned">Fine-tuned</button>
                                <button class="nv-seg-btn" data-target="view-base">Base Model</button>
                                <button class="nv-seg-btn" data-target="view-reference">Reference</button>
                            </div>
                        </div>
                    </div>

                    <!-- Content -->
                    <div id="case-display" class="nv-content">
                        ${createDetailedComparison(reorderedExamples[0])}
                    </div>
                </div>
            </div>
        </div>
    `;

    // ── Wire up event listeners ─────────────────────────────────────────
    setTimeout(() => {
        const selector = document.getElementById('case-selector') as HTMLSelectElement;
        const display = document.getElementById('case-display');
        const segControl = document.querySelector('.nv-seg') as HTMLElement;

        if (selector && display) {
            // Helper to switch to Case Mode
            const switchToCase = (idx: number) => {
                display.innerHTML = createDetailedComparison(reorderedExamples[idx]);
                if (segControl) segControl.style.display = '';
                resetTogglesToDefault(); // Resets header too
            };

            // Event: Dropdown Change
            selector.addEventListener('change', (e) => {
                const i = parseInt((e.target as HTMLSelectElement).value);
                switchToCase(i);
            });
        }

        attachToggleListeners();
    }, 0);
}

// ── Toggle listeners ────────────────────────────────────────────────────
function attachToggleListeners() {
    const buttons = document.querySelectorAll('.nv-seg-btn');

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const btn = e.currentTarget as HTMLElement;
            const targetId = btn.getAttribute('data-target');
            if (!targetId) return;

            // Hide all panels, show target
            document.querySelectorAll('.output-panel').forEach(p =>
                (p as HTMLElement).style.display = 'none'
            );
            const target = document.getElementById(targetId);
            if (target) target.style.display = 'block';

            // Update button states
            buttons.forEach(b => (b as HTMLElement).classList.remove('active'));
            btn.classList.add('active');

            // Update header text
            const header = document.getElementById('view-header-sticky');
            if (header) {
                const labels: Record<string, string> = {
                    'view-finetuned': 'Fine-tuned SOAP Note',
                    'view-base': 'Base Model SOAP Note',
                    'view-reference': 'Reference Note'
                };
                header.innerHTML = `<span class="nv-dot nv-dot--blue"></span> ${labels[targetId] || ''}`;
            }
        });
    });
}

// ── Format SOAP notes ───────────────────────────────────────────────────
function formatSOAPNote(text: string): string {
    return text
        .replace(/^# (.+)$/gm, '<div class="soap-h1">$1</div>')
        .replace(/^## (.+)$/gm, '<div class="soap-h2">$1</div>')
        .replace(/^### (.+)$/gm, '<div class="soap-h3">$1</div>')
        .replace(/\*\*([A-Z][A-Z\s]+):\*\*/g, '<div class="soap-h1">$1:</div>')
        .replace(/\*\*(.+?)\*\*/g, '<strong class="soap-bold">$1</strong>')
        .replace(/\n/g, '<br>');
}

// ── Build comparison content ────────────────────────────────────────────
function createDetailedComparison(example: any): string {
    return `
        <!-- Left Pane: Input -->
        <div class="nv-pane nv-pane--left">
            <div class="nv-note nv-note--input">${example.input.trim()}</div>
        </div>

        <!-- Right Pane: Output -->
        <div class="nv-pane nv-pane--right">
            <div id="view-finetuned" class="output-panel" style="display:block;">
                <div class="nv-note nv-note--finetuned">${formatSOAPNote(example.finetuned.trim())}</div>
            </div>

            <div id="view-base" class="output-panel" style="display:none;">
                <div class="nv-note nv-note--base">${formatSOAPNote(example.base.trim())}</div>
            </div>

            <div id="view-reference" class="output-panel" style="display:none;">
                <div class="nv-note nv-note--reference">${formatSOAPNote(example.reference.trim())}</div>
            </div>
        </div>
    `;
}


// ── Reset toggles ───────────────────────────────────────────────────────
function resetTogglesToDefault() {
    document.querySelectorAll('.nv-seg-btn').forEach(b => {
        (b as HTMLElement).classList.remove('active');
        if ((b as HTMLElement).getAttribute('data-target') === 'view-finetuned') {
            (b as HTMLElement).classList.add('active');
        }
    });

    const header = document.getElementById('view-header-sticky');
    if (header) header.innerHTML = '<span class="nv-dot nv-dot--blue"></span> Fine-tuned SOAP Note';

    attachToggleListeners();
}

