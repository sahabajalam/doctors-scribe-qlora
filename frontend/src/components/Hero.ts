import results from '../../comparison_results.json';

export function renderHero(container: HTMLElement) {
    const { finetuned_metrics, examples } = results;

    // Limit to first 10 examples for the demo
    const demoExamples = examples.slice(0, 10);

    container.innerHTML = `
        <style>
            .demo-box {
                height: 500px;
                box-shadow: var(--shadow-xl);
                display: flex;
                flex-direction: column;
            }
            @media (max-width: 768px) {
                .demo-box {
                    height: 400px;
                }
            }
        </style>
        <div class="section" style="min-height: 90vh; display: flex; align-items: center;">
            <div class="container">
                <div class="grid grid-2" style="gap: 4rem; align-items: center;">
                    <!-- Left Column: Info -->
                    <div class="fade-in-up">
                        <div class="badge badge-primary mb-6">
                            <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                            </svg>
                            Fine-tuned Google/medgemma-1.5-4b Model
                        </div>
                        
                        <h1 class="mb-6" style="line-height: 1.1;">
                            <span style="white-space: nowrap;">Unstructured Notes →</span><br/>
                            <span style="color: var(--primary); white-space: nowrap;">SOAP Documentation</span>
                        </h1>
                        
                        <p class="text-secondary mb-6" style="font-size: 1.125rem; line-height: 1.8;">
                            Transform unstructured medical documentation into professional SOAP-format clinical notes instantly.
                        </p>

                        <!-- Compact Inline Stats -->
                        <div style="display: flex; gap: 1.5rem; margin-bottom: 2rem; flex-wrap: wrap;">
                            <div style="display: flex; align-items: center; gap: 6px;">
                                <span style="font-size: 1.25rem; font-weight: 800; color: var(--primary);">${examples.length}</span>
                                <span style="font-size: 0.8rem; color: var(--text-muted); font-weight: 500;">Cases</span>
                            </div>
                            <div style="width: 1px; background: var(--border-light);"></div>
                            <div style="display: flex; align-items: center; gap: 6px;">
                                <span style="font-size: 1.25rem; font-weight: 800; color: var(--primary);">${(finetuned_metrics.rouge_l * 100).toFixed(1)}%</span>
                                <span style="font-size: 0.8rem; color: var(--text-muted); font-weight: 500;">ROUGE-L</span>
                            </div>
                            <div style="width: 1px; background: var(--border-light);"></div>
                            <div style="display: flex; align-items: center; gap: 6px;">
                                <span style="font-size: 1.25rem; font-weight: 800; color: var(--primary);">${(finetuned_metrics.bertscore_f1 * 100).toFixed(1)}%</span>
                                <span style="font-size: 0.8rem; color: var(--text-muted); font-weight: 500;">BERTScore</span>
                            </div>
                        </div>
                        

                    </div>
                    
                    <!-- Right Column: Interactive Demo -->
                    <div style="animation: fadeInUp 0.6s ease-out 0.2s both;">
                        <div class="demo-box" style="box-shadow: var(--shadow-xl); display: flex; flex-direction: column;">
                            <div class="demo-header">
                                <div class="demo-label" id="demo-stage">Input</div>
                                <div style="display: flex; align-items: center; gap: 0.75rem;">
                                    <div style="display: flex; gap: 0.5rem;">
                                        <div style="width: 12px; height: 12px; border-radius: 50%; background: #EF4444;"></div>
                                        <div style="width: 12px; height: 12px; border-radius: 50%; background: #F59E0B;"></div>
                                        <div style="width: 12px; height: 12px; border-radius: 50%; background: #00A86B;"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="demo-content" id="demo-output" style="flex: 1; overflow-y: auto;"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    // ── Interactive Demo Logic ─────────────────────────────────────────
    const demoOutput = document.getElementById('demo-output');
    const demoStage = document.getElementById('demo-stage');


    // Helper to format SOAP note to HTML
    function formatSOAPNote(text: string): string {
        return text
            .replace(/^### (.+)$/gm, '<div style="color:var(--primary); font-size:1.1em; font-weight:700; margin-top:1rem; margin-bottom:0.5rem; border-bottom:1px solid var(--border-light); padding-bottom:4px;">$1</div>')
            .replace(/^([A-Za-z].+?):/gm, '<strong style="color:var(--text-primary);">$1:</strong>')
            .replace(/\n/g, '<br>');
    }



    let currentCaseIndex = 0;
    let isAnimating = false;

    // HTML-aware typing function
    async function typeText(content: string, speed: number = 10): Promise<void> {
        if (!demoOutput) return;
        demoOutput.innerHTML = '';
        demoOutput.classList.add('typing-cursor');

        let i = 0;
        while (i < content.length) {
            if (content[i] === '<') {
                const tagEnd = content.indexOf('>', i);
                if (tagEnd !== -1) {
                    demoOutput.innerHTML += content.substring(i, tagEnd + 1);
                    i = tagEnd + 1;
                    continue;
                }
            }
            demoOutput.innerHTML += content[i];
            demoOutput.scrollTop = demoOutput.scrollHeight;
            i++;
            const delay = speed + (Math.random() * 10 - 5);
            await new Promise(resolve => setTimeout(resolve, delay > 0 ? delay : 5));
        }
        demoOutput.classList.remove('typing-cursor');
    }

    async function runDemo() {
        if (isAnimating) return;
        isAnimating = true;

        while (true) {
            const example = demoExamples[currentCaseIndex];
            const inputText = example.input; // No truncation
            const outputText = formatSOAPNote(example.finetuned); // No truncation

            if (demoStage && demoOutput) {
                // Stage 1: Type input
                demoStage.textContent = 'Unstructured Input';
                demoOutput.style.fontFamily = 'monospace';
                demoOutput.style.color = 'var(--text-primary)';
                await typeText(inputText, 20);

                await new Promise(resolve => setTimeout(resolve, 1200));

                // Stage 2: Processing
                demoStage.textContent = 'Processing...';
                demoOutput.innerHTML = `
                    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; gap: 1rem;">
                        <div style="width: 40px; height: 40px; border: 3px solid var(--border-light); border-top-color: var(--primary); border-radius: 50%; animation: spin 1s linear infinite;"></div>
                        <div style="color: var(--text-muted); font-size: 0.875rem;">Converting to SOAP format...</div>
                    </div>
                    <style>
                        @keyframes spin { to { transform: rotate(360deg); } }
                    </style>
                `;
                await new Promise(resolve => setTimeout(resolve, 1500));

                // Stage 3: Type output
                demoStage.textContent = 'SOAP-Formatted Output';
                demoOutput.style.fontFamily = 'var(--font-sans)';
                await typeText(outputText, 4);

                await new Promise(resolve => setTimeout(resolve, 3000));
            }

            // Advance to next case
            currentCaseIndex = (currentCaseIndex + 1) % demoExamples.length;
        }
    }

    // Auto-start
    setTimeout(runDemo, 500);
}
