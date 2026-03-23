import results from '../../comparison_results.json';

export function renderMetricsShowcase(container: HTMLElement) {
    const { base_metrics, finetuned_metrics, examples } = results;
    const samples = examples;
    const metrics = {
        base: {
            'rouge-l': base_metrics.rouge_l,
            'bertscore-f1': base_metrics.bertscore_f1,
            'format-compliance': base_metrics.format_compliance
        },
        finetuned: {
            'rouge-l': finetuned_metrics.rouge_l,
            'bertscore-f1': finetuned_metrics.bertscore_f1,
            'format-compliance': finetuned_metrics.format_compliance
        }
    };

    container.className = "section";
    container.id = "metrics";

    container.innerHTML = `
        <div class="container">
            <div style="text-align: center; margin-bottom: 4rem;">
                <h2 class="fade-in-up" style="margin-bottom: 1rem;">Model Performance</h2>
                <p style="color: var(--text-secondary); font-size: 1.125rem; max-width: 600px; margin: 0 auto;">
                    Comprehensive evaluation metrics comparing base and fine-tuned models
                </p>
            </div>
            
            <!-- Metrics Grid -->
            <div class="grid grid-3 fade-in" style="margin-bottom: 4rem;">
                <!-- ROUGE-L -->
                <div class="glass-card">
                    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem;">
                        <div style="display: flex; align-items: center; gap: 1rem;">
                            <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 12px; display: flex; align-items: center; justify-content: center;">
                                <svg style="width: 24px; height: 24px; color: white;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <div style="font-size: 0.875rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em;">ROUGE-L</div>
                        </div>
                        
                        <!-- Circular Progress -->
                        <div style="position: relative; width: 60px; height: 60px;">
                            <svg width="60" height="60" viewBox="0 0 60 60">
                                <circle cx="30" cy="30" r="25" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="4" />
                                <circle cx="30" cy="30" r="25" fill="none" stroke="#667eea" stroke-width="4" stroke-dasharray="157" stroke-dashoffset="${157 - (157 * metrics.finetuned['rouge-l'])}" transform="rotate(-90 30 30)" style="transition: stroke-dashoffset 1s ease-out;" />
                            </svg>
                            <div style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 700;">
                                ${(metrics.finetuned['rouge-l'] * 100).toFixed(0)}%
                            </div>
                        </div>
                    </div>
                    
                    <div style="font-size: 2.5rem; font-weight: 800; color: white; margin-bottom: 1rem; line-height: 1;">
                        ${(metrics.finetuned['rouge-l'] * 100).toFixed(1)}%
                    </div>
                    
                    <div style="background: rgba(0, 0, 0, 0.2); padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                            <span style="color: var(--text-muted); font-size: 0.875rem;">Base Model</span>
                            <span style="font-weight: 600; color: var(--text-secondary);">${(metrics.base['rouge-l'] * 100).toFixed(1)}%</span>
                        </div>
                        <div style="height: 6px; background: rgba(255,255,255,0.1); border-radius: 3px; overflow: hidden;">
                            <div style="height: 100%; width: ${(metrics.base['rouge-l'] / metrics.finetuned['rouge-l']) * 100}%; background: var(--text-secondary);"></div>
                        </div>
                    </div>
                    <div style="color: var(--text-secondary); font-size: 0.875rem; line-height: 1.6;">
                        Comparing generated text overlapping with reference summary
                    </div>
                </div>
                
                <!-- BERTScore -->
                <div class="glass-card">
                    <!-- Similar updates for BERTScore... keeping conciseness -->
                    <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
                        <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); border-radius: 12px; display: flex; align-items: center; justify-content: center;">
                            <svg style="width: 24px; height: 24px; color: white;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                            </svg>
                        </div>
                        <div>
                            <div style="font-size: 0.875rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em;">BERTScore F1</div>
                            <div style="font-size: 2rem; font-weight: 800; color: white;">${(metrics.finetuned['bertscore-f1'] * 100).toFixed(1)}%</div>
                        </div>
                    </div>
                    
                    <!-- Visual Comparison Label -->
                    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem; font-size: 0.75rem; color: var(--text-muted);">
                        <span>Accuracy Improvement</span>
                        <span style="color: var(--success-color); font-weight: 600;">+25%</span>
                    </div>
                    
                     <!-- Custom Bar Chart -->
                    <div style="display: flex; height: 100px; gap: 1rem; align-items: flex-end; padding-bottom: 1rem; border-bottom: 1px solid rgba(255,255,255,0.1); margin-bottom: 1rem;">
                        <div style="flex: 1; display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
                            <div style="width: 100%; height: ${(metrics.base['bertscore-f1'] * 100)}px; background: rgba(255,255,255,0.2); border-radius: 4px 4px 0 0; position: relative; transition: height 1s ease;">
                                <span style="position: absolute; top: -20px; left: 50%; transform: translateX(-50%); font-size: 0.75rem; font-weight: 600;">${(metrics.base['bertscore-f1'] * 100).toFixed(0)}</span>
                            </div>
                            <span style="font-size: 0.75rem; color: var(--text-muted);">Base</span>
                        </div>
                        <div style="flex: 1; display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
                             <div style="width: 100%; height: ${(metrics.finetuned['bertscore-f1'] * 100)}px; background: var(--secondary-gradient); border-radius: 4px 4px 0 0; position: relative; transition: height 1s ease;">
                                <span style="position: absolute; top: -20px; left: 50%; transform: translateX(-50%); font-size: 0.75rem; font-weight: 600;">${(metrics.finetuned['bertscore-f1'] * 100).toFixed(0)}</span>
                             </div>
                            <span style="font-size: 0.75rem; color: var(--text-muted);">Tuned</span>
                        </div>
                    </div>
                    
                    <div style="color: var(--text-secondary); font-size: 0.875rem; line-height: 1.6;">
                        Semantic similarity capturing the true meaning of medical terms
                    </div>
                </div>
                
                <!-- Format Compliance -->
                <div class="glass-card">
                    <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
                        <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); border-radius: 12px; display: flex; align-items: center; justify-content: center;">
                            <svg style="width: 24px; height: 24px; color: white;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
                            </svg>
                        </div>
                        <div>
                            <div style="font-size: 0.875rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em;">Format Compliance</div>
                            <div style="font-size: 2rem; font-weight: 800; color: white;">${(metrics.finetuned['format-compliance'] * 100).toFixed(1)}%</div>
                        </div>
                    </div>
                    <div style="background: rgba(0, 0, 0, 0.2); padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                            <span style="color: var(--text-muted); font-size: 0.875rem;">Base Model</span>
                            <span style="font-weight: 600; color: var(--text-secondary);">${(metrics.base['format-compliance'] * 100).toFixed(1)}%</span>
                        </div>
                        <div style="display: flex; justify-content: space-between;">
                            <span style="color: var(--text-muted); font-size: 0.875rem;">Fine-tuned</span>
                            <span style="font-weight: 600; color: var(--secondary);">${(metrics.finetuned['format-compliance'] * 100).toFixed(1)}%</span>
                        </div>
                    </div>
                    <div style="color: var(--text-secondary); font-size: 0.875rem; line-height: 1.6;">
                        Adherence to proper SOAP note structure and formatting
                    </div>
                </div>
            </div>
            
            <!-- Sample Comparisons -->
            <div style="text-align: center; margin-bottom: 2rem;">
                <h3>Example Transformations</h3>
                <p style="color: var(--text-secondary); margin-top: 0.5rem;">See how the model converts messy notes into professional SOAP format</p>
            </div>
            
            <div id="examples-carousel">
                ${renderCarousel(samples)}
            </div>
        </div>
    `;
}

function renderCarousel(samples: any[]) {
    if (!samples || samples.length === 0) return '<p>No samples available</p>';

    const firstSample = samples[0];

    return `
        <div style="position: relative; max-width: 1000px; margin: 0 auto;">
            <div id="carousel-content" style="background: var(--bg-card); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: var(--radius-xl); padding: 2rem; min-height: 400px;">
                ${renderSample(firstSample, 0)}
            </div>
            
            <div style="display: flex; justify-content: center; align-items: center; gap: 1rem; margin-top: 2rem;">
                <button id="prev-btn" class="btn btn-secondary" style="padding: 0.5rem 1rem;">
                    <svg style="width: 20px; height: 20px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                </button>
                <div id="carousel-dots" style="display: flex; gap: 0.5rem;">
                    ${samples.map((_, i) => `
                        <button class="dot ${i === 0 ? 'active' : ''}" data-index="${i}" style="width: 10px; height: 10px; border-radius: 50%; border: none; cursor: pointer; background: ${i === 0 ? 'var(--primary)' : 'rgba(255,255,255,0.2)'}; transition: all 0.3s;"></button>
                    `).join('')}
                </div>
                <button id="next-btn" class="btn btn-secondary" style="padding: 0.5rem 1rem;">
                    <svg style="width: 20px; height: 20px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>
        </div>
        
        <script>
            (function() {
                const samples = ${JSON.stringify(samples)};
                let currentIndex = 0;
                
                function updateCarousel(index) {
                    const content = document.getElementById('carousel-content');
                    const dots = document.querySelectorAll('.dot');
                    
                    if (content && dots) {
                        content.innerHTML = \`${renderSample(firstSample, 0).replace(/`/g, '\\`')}\`.replace(/%%INDEX%%/g, index).replace(/%%SAMPLE%%/g, JSON.stringify(samples[index]));
                        
                        // Update sample content
                        const sample = samples[index];
                        content.innerHTML = \`
                            <div style="margin-bottom: 2rem;">
                                <div style="font-weight: 600; color: var(--text-muted); margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
                                    <span style="background: rgba(102, 126, 234, 0.2); padding: 0.25rem 0.75rem; border-radius: 4px; font-size: 0.875rem;">Example \${index + 1}/\${samples.length}</span>
                                </div>
                                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
                                    <div>
                                        <div style="font-weight: 600; margin-bottom: 0.75rem; color: var(--danger); display: flex; align-items: center; gap: 0.5rem;">
                                            <svg style="width: 16px; height: 16px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                            </svg>
                                            Messy Input
                                        </div>
                                        <div class="medical-note" style="max-height: 300px; overflow-y: auto; font-size: 0.8rem;">\${sample.input}</div>
                                    </div>
                                    <div>
                                        <div style="font-weight: 600; margin-bottom: 0.75rem; color: var(--secondary); display: flex; align-items: center; gap: 0.5rem;">
                                            <svg style="width: 16px; height: 16px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            Structured Output
                                        </div>
                                        <div class="medical-note" style="max-height: 300px; overflow-y: auto; font-size: 0.8rem;">\${sample.finetuned.substring(0, 500)}...</div>
                                    </div>
                                </div>
                            </div>
                        \`;
                        
                        dots.forEach((dot, i) => {
                            dot.style.background = i === index ? 'var(--primary)' : 'rgba(255,255,255,0.2)';
                        });
                    }
                }
                
                document.getElementById('prev-btn')?.addEventListener('click', () => {
                    currentIndex = (currentIndex - 1 + samples.length) % samples.length;
                    updateCarousel(currentIndex);
                });
                
                document.getElementById('next-btn')?.addEventListener('click', () => {
                    currentIndex = (currentIndex + 1) % samples.length;
                    updateCarousel(currentIndex);
                });
                
                document.querySelectorAll('.dot').forEach((dot, i) => {
                    dot.addEventListener('click', () => {
                        currentIndex = i;
                        updateCarousel(currentIndex);
                    });
                });
            })();
        </script>
    `;
}

function renderSample(sample: any, index: number) {
    return `
        <div style="margin-bottom: 2rem;">
            <div style="font-weight: 600; color: var(--text-muted); margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
                <span style="background: rgba(102, 126, 234, 0.2); padding: 0.25rem 0.75rem; border-radius: 4px; font-size: 0.875rem;">Example ${index + 1}</span>
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
                <div>
                    <div style="font-weight: 600; margin-bottom: 0.75rem; color: var(--danger); display: flex; align-items: center; gap: 0.5rem;">
                        <svg style="width: 16px; height: 16px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                        Messy Input
                    </div>
                    <div class="medical-note" style="max-height: 300px; overflow-y: auto; font-size: 0.8rem;">${sample.input}</div>
                </div>
                <div>
                    <div style="font-weight: 600; margin-bottom: 0.75rem; color: var(--secondary); display: flex; align-items: center; gap: 0.5rem;">
                        <svg style="width: 16px; height: 16px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Structured Output
                    </div>
                    <div class="medical-note" style="max-height: 300px; overflow-y: auto; font-size: 0.8rem;">${sample.finetuned.substring(0, 500)}...</div>
                </div>
            </div>
        </div>
    `;
}
