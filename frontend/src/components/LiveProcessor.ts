export function renderLiveProcessor(container: HTMLElement) {
    container.className = "section";
    container.id = "live-demo";

    const sampleNotes = [
        "52yo M diabetic neuropathy. burning pain feet. needs treatment. Δ painful diabetic peripheral neuropathy",
        "67yo M h/o CHF EF 25% presents SOB x3d. CXR bilateral effusions. echo unchanged. thoracentesis R side 1.5L transudative.",
        "48yo F thyroid nodule. 3cm R lobe cold on scan. FNA bethesda IV. needs lobectomy."
    ];

    container.innerHTML = `
        <div class="container">
            <div style="text-align: center; margin-bottom: 3rem;">
                <h2 class="fade-in-up" style="margin-bottom: 1rem;">Try Live Demo</h2>
                <p style="color: var(--text-secondary); font-size: 1.125rem; max-width: 700px; margin: 0 auto;">
                    Paste a messy clinical note and watch it transform into structured SOAP format
                </p>
            </div>
            
            <div style="max-width: 1200px; margin: 0 auto;">
                <div class="glass-card" style="padding: 0; overflow: hidden;">
                    <div style="display: grid; grid-template-columns: 1fr 1fr; min-height: 500px;">
                        <!-- Input Side -->
                        <div style="padding: 2rem; border-right: 1px solid rgba(255, 255, 255, 0.1);">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                                <h3 style="font-size: 1.125rem; font-weight: 600;">Input</h3>
                                <div style="display: flex; gap: 0.5rem;">
                                    <button id="clear-btn" style="padding: 0.5rem 1rem; background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 6px; color: var(--text-secondary); cursor: pointer; font-size: 0.875rem; transition: all 0.3s;">
                                        Clear
                                    </button>
                                </div>
                            </div>
                            
                            <textarea 
                                id="messy-input" 
                                placeholder="Paste your messy clinical note here..."
                                style="width: 100%; height: 300px; background: rgba(0, 0, 0, 0.3); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 8px; padding: 1rem; color: white; font-family: 'JetBrains Mono', monospace; font-size: 0.875rem; resize: vertical; outline: none; transition: border-color 0.3s;"
                            ></textarea>
                            
                            <div style="margin-top: 1rem;">
                                <div style="font-size: 0.875rem; color: var(--text-muted); margin-bottom: 0.75rem;">Try these examples:</div>
                                <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                                    ${sampleNotes.map((note, i) => `
                                        <button class="sample-btn" data-note="${note.replace(/"/g, '&quot;')}" 
                                                style="text-align: left; padding: 0.75rem; background: rgba(102, 126, 234, 0.1); border: 1px solid rgba(102, 126, 234, 0.3); border-radius: 6px; color: var(--text-secondary); cursor: pointer; font-size: 0.75rem; transition: all 0.3s; font-family: 'JetBrains Mono', monospace;">
                                            <div style="font-weight: 600; color: var(--primary); margin-bottom: 0.25rem;">Example ${i + 1}</div>
                                            ${note.substring(0, 80)}${note.length > 80 ? '...' : ''}
                                        </button>
                                    `).join('')}
                                </div>
                            </div>
                            
                            <button id="convert-btn" class="btn btn-primary" style="width: 100%; margin-top: 1.5rem; justify-content: center;">
                                <svg id="convert-icon" style="width: 20px; height: 20px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                </svg>
                                <span id="convert-text">Convert to SOAP</span>
                            </button>
                        </div>
                        
                        <!-- Output Side -->
                        <div style="padding: 2rem; background: rgba(0, 0, 0, 0.2);">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                                <h3 style="font-size: 1.125rem; font-weight: 600;">Output</h3>
                                <button id="copy-btn" style="padding: 0.5rem 1rem; background: rgba(72, 187, 120, 0.1); border: 1px solid rgba(72, 187, 120, 0.3); border-radius: 6px; color: var(--secondary); cursor: pointer; font-size: 0.875rem; transition: all 0.3s; display: none;">
                                    <svg style="width: 16px; height: 16px; display: inline-block; vertical-align: middle; margin-right: 0.25rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                                    </svg>
                                    Copy
                                </button>
                            </div>
                            
                            <div id="output-area" style="height: 440px; overflow-y: auto; background: rgba(0, 0, 0, 0.3); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 8px; padding: 1rem;">
                                <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; color: var(--text-muted); text-align: center;">
                                    <svg style="width: 64px; height: 64px; margin-bottom: 1rem; opacity: 0.3;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                    </svg>
                                    <div style="font-size: 1rem; color: var(--text-muted);">
                                        Your structured SOAP note will appear here
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <style>
            #messy-input:focus {
                border-color: var(--primary);
            }
            
            .sample-btn:hover {
                background: rgba(102, 126, 234, 0.2);
                border-color: rgba(102, 126, 234, 0.5);
            }
            
            #clear-btn:hover {
                background: rgba(255, 255, 255, 0.1);
                border-color: rgba(255, 255, 255, 0.2);
            }
            
            #copy-btn:hover {
                background: rgba(72, 187, 120, 0.2);
                border-color: rgba(72, 187, 120, 0.5);
            }
            
            @keyframes spin {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
            }
            
            .spinning {
                animation: spin 1s linear infinite;
            }
            
            @media (max-width: 768px) {
                .glass-card > div {
                    grid-template-columns: 1fr !important;
                }
                
                .glass-card > div > div:first-child {
                    border-right: none !important;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                }
            }
        </style>
    `;

    // Setup event listeners
    setupLiveProcessorHandlers();
}

function setupLiveProcessorHandlers() {
    const input = document.getElementById('messy-input') as HTMLTextAreaElement;
    const output = document.getElementById('output-area');
    const convertBtn = document.getElementById('convert-btn');
    const clearBtn = document.getElementById('clear-btn');
    const copyBtn = document.getElementById('copy-btn');

    // Sample notes
    document.querySelectorAll('.sample-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const note = btn.getAttribute('data-note');
            if (input && note) {
                input.value = note;
                input.focus();
            }
        });
    });

    // Clear button
    clearBtn?.addEventListener('click', () => {
        if (input) {
            input.value = '';
            input.focus();
        }
        if (output) {
            output.innerHTML = `
                <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; color: var(--text-muted); text-align: center;">
                    <svg style="width: 64px; height: 64px; margin-bottom: 1rem; opacity: 0.3;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                    <div>Your structured SOAP note will appear here</div>
                </div>
            `;
        }
        if (copyBtn) copyBtn.style.display = 'none';
    });

    // Convert button
    convertBtn?.addEventListener('click', async () => {
        if (!input?.value.trim()) {
            alert('Please enter a clinical note first');
            return;
        }

        // Show loading state
        if (convertBtn) convertBtn.setAttribute('disabled', 'true');

        if (output) {
            output.innerHTML = `
                <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%;">
                    <div style="width: 50px; height: 50px; border: 3px solid rgba(102, 126, 234, 0.2); border-top-color: var(--primary); border-radius: 50%; animation: spin 1s linear infinite;"></div>
                    <div style="margin-top: 1rem; color: var(--text-secondary);">Converting to SOAP format...</div>
                </div>
            `;
        }

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Mock output
        const mockOutput = generateMockSOAP(input.value);

        if (output) {
            output.innerHTML = `
                <div class="medical-note" style="border-left: none; padding: 0; background: transparent; white-space: pre-wrap; font-size: 0.875rem; line-height: 1.7;">
${mockOutput}
                </div>
            `;
        }

        // Reset button state
        if (convertBtn) convertBtn.removeAttribute('disabled');
        if (copyBtn) copyBtn.style.display = 'block';
    });

    // Copy button
    copyBtn?.addEventListener('click', () => {
        const outputText = output?.textContent || '';
        navigator.clipboard.writeText(outputText).then(() => {
            const originalText = copyBtn.innerHTML;
            copyBtn.innerHTML = `
                <svg style="width: 16px; height: 16px; display: inline-block; vertical-align: middle; margin-right: 0.25rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Copied!
            `;
            setTimeout(() => {
                copyBtn.innerHTML = originalText;
            }, 2000);
        });
    });
}

function generateMockSOAP(input: string): string {
    return `### Subjective
${input.substring(0, 100)}... [Patient presenting with symptoms as described]

Past Medical History: As noted
Current Medications: As prescribed
Allergies: NKDA
Social History: Non-contributory

### Objective
Vital Signs: Within normal limits

Physical Examination:
- General: Alert and oriented
- Examination findings consistent with presentation

Laboratory/Imaging Results:
- As documented in input

### Assessment
Primary Diagnosis: Based on clinical presentation
- ${input.substring(0, 50)}...

Clinical Reasoning: Assessment based on presented symptoms and findings.

### Plan
1. Continue current management
2. Appropriate follow-up as indicated
3. Patient education provided
4. Monitor for changes
5. Follow-up appointment scheduled

⚠️ This is a mock output for demonstration purposes. Real implementation requires backend API integration with the fine-tuned model.`;
}
