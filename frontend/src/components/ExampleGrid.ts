import results from '../../comparison_results.json';

export function renderExampleGrid(container: HTMLElement) {
    const { examples } = results;

    container.className = "section";
    container.id = "examples";
    container.style.background = "rgba(0, 0, 0, 0.2)";

    container.innerHTML = `
        <div class="container">
            <div style="text-align: center; margin-bottom: 3rem;">
                <h2 class="fade-in-up" style="margin-bottom: 1rem;">More Examples</h2>
                <p style="color: var(--text-secondary); font-size: 1.125rem; max-width: 600px; margin: 0 auto;">
                    Explore additional transformations from messy notes to structured SOAP format
                </p>
            </div>
            
            <div class="grid grid-2" style="max-width: 1200px; margin: 0 auto;">
                ${examples.slice(0, 6).map((example: any, index: number) => `
                    <div class="glass-card example-card" style="cursor: pointer; position: relative;">
                        <div style="display: flex; justify-content: between; align-items: start; margin-bottom: 1rem;">
                            <div style="flex: 1;">
                                <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.5rem;">
                                    Example ${index + 1}
                                </div>
                                <div style="font-weight: 600; color: white; margin-bottom: 0.75rem;">
                                    Clinical Note Transformation
                                </div>
                            </div>
                            <div style="width: 32px; height: 32px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                                <svg style="width: 16px; height: 16px; color: white;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                </svg>
                            </div>
                        </div>
                        
                        <div class="medical-note" style="margin-bottom: 1rem; max-height: 100px; overflow: hidden; position: relative; font-size: 0.75rem;">
                            ${example.input.substring(0, 150)}...
                            <div style="position: absolute; bottom: 0; left: 0; right: 0; height: 40px; background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8));"></div>
                        </div>
                        
                        <div style="display: flex; gap: 1rem; margin-bottom: 1rem;">
                            <div style="flex: 1; text-align: center; padding: 0.75rem; background: rgba(72, 187, 120, 0.1); border-radius: 8px;">
                                <div style="font-size: 0.75rem; color: var(--text-muted); margin-bottom: 0.25rem;">Output</div>
                                <div style="font-size: 1rem; font-weight: 700; color: var(--secondary);">
                                    ${example.finetuned.split(' ').length} words
                                </div>
                            </div>
                            <div style="flex: 1; text-align: center; padding: 0.75rem; background: rgba(102, 126, 234, 0.1); border-radius: 8px;">
                                <div style="font-size: 0.75rem; color: var(--text-muted); margin-bottom: 0.25rem;">Format</div>
                                <div style="font-size: 1rem; font-weight: 700; color: var(--primary);">
                                    SOAP
                                </div>
                            </div>
                        </div>
                        
                        <button class="view-details-btn" data-index="${index}" style="width: 100%; padding: 0.75rem; background: rgba(102, 126, 234, 0.1); border: 1px solid rgba(102, 126, 234, 0.3); border-radius: 8px; color: var(--primary); font-weight: 600; cursor: pointer; transition: all 0.3s;">
                            View Full Transformation
                        </button>
                    </div>
                `).join('')}
            </div>
        </div>
        
        <!-- Modal for detailed view -->
        <div id="example-modal" style="display: none; position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0, 0, 0, 0.8); backdrop-filter: blur(5px); z-index: 1000; padding: 2rem; overflow-y: auto;">
            <div style="max-width: 1200px; margin: 0 auto;">
                <div style="background: var(--bg-dark); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 16px; padding: 2rem; position: relative;">
                    <button id="close-modal" style="position: absolute; top: 1rem; right: 1rem; width: 40px; height: 40px; background: rgba(255, 255, 255, 0.1); border: none; border-radius: 8px; color: white; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.3s;">
                        <svg style="width: 20px; height: 20px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                    
                    <h3 style="margin-bottom: 2rem;">Transformation Details</h3>
                    
                    <div id="modal-content" style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
                        <!-- Content will be inserted here -->
                    </div>
                </div>
            </div>
        </div>
        
        <style>
            .example-card:hover {
                transform: translateY(-8px);
            }
            
            .view-details-btn:hover {
                background: rgba(102, 126, 234, 0.2);
                border-color: rgba(102, 126, 234, 0.5);
            }
            
            #close-modal:hover {
                background: rgba(255, 255, 255, 0.2);
            }
            
            @media (max-width: 768px) {
                #modal-content {
                    grid-template-columns: 1fr !important;
                }
            }
        </style>
    `;

    setupExampleGridHandlers();
}

function setupExampleGridHandlers() {
    const modal = document.getElementById('example-modal');
    const modalContent = document.getElementById('modal-content');
    const closeBtn = document.getElementById('close-modal');
    const examples = results.examples;

    // View details buttons
    document.querySelectorAll('.view-details-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const index = parseInt(btn.getAttribute('data-index') || '0');
            const example = examples[index];

            if (modalContent && example) {
                modalContent.innerHTML = `
                    <div>
                        <div style="font-weight: 600; margin-bottom: 1rem; color: var(--danger); display: flex; align-items: center; gap: 0.5rem;">
                            <svg style="width: 20px; height: 20px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                            Input (Messy Note)
                        </div>
                        <div class="medical-note" style="max-height: 500px; overflow-y: auto;">
${example.input}
                        </div>
                        <div style="margin-top: 1rem; padding: 1rem; background: rgba(255, 107, 107, 0.1); border-radius: 8px; border: 1px solid rgba(255, 107, 107, 0.2);">
                            <div style="font-size: 0.875rem; color: var(--text-muted); margin-bottom: 0.5rem;">Statistics</div>
                            <div style="display: flex; gap: 1rem;">
                                <div>
                                    <span style="color: var(--text-muted);">Words:</span> 
                                    <span style="font-weight: 600; color: white;">${example.input.split(' ').length}</span>
                                </div>
                                <div>
                                    <span style="color: var(--text-muted);">Characters:</span> 
                                    <span style="font-weight: 600; color: white;">${example.input.length}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <div style="font-weight: 600; margin-bottom: 1rem; color: var(--secondary); display: flex; align-items: center; gap: 0.5rem;">
                            <svg style="width: 20px; height: 20px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            Output (Structured SOAP)
                        </div>
                        <div class="medical-note" style="max-height: 500px; overflow-y: auto;">
${example.finetuned}
                        </div>
                        <div style="margin-top: 1rem; padding: 1rem; background: rgba(72, 187, 120, 0.1); border-radius: 8px; border: 1px solid rgba(72, 187, 120, 0.2);">
                            <div style="font-size: 0.875rem; color: var(--text-muted); margin-bottom: 0.5rem;">Statistics</div>
                            <div style="display: flex; gap: 1rem;">
                                <div>
                                    <span style="color: var(--text-muted);">Words:</span> 
                                    <span style="font-weight: 600; color: white;">${example.finetuned.split(' ').length}</span>
                                </div>
                                <div>
                                    <span style="color: var(--text-muted);">Characters:</span> 
                                    <span style="font-weight: 600; color: white;">${example.finetuned.length}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            }

            if (modal) {
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close modal
    closeBtn?.addEventListener('click', () => {
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Close on background click
    modal?.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Close on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal?.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}
