import{r as x,a as b,b as w}from"./Results-DQYkMpPQ.js";function A(h){const{finetuned_metrics:l,examples:d}=x,m=d.slice(0,10);h.innerHTML=`
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
                                <span style="font-size: 1.25rem; font-weight: 800; color: var(--primary);">${d.length}</span>
                                <span style="font-size: 0.8rem; color: var(--text-muted); font-weight: 500;">Cases</span>
                            </div>
                            <div style="width: 1px; background: var(--border-light);"></div>
                            <div style="display: flex; align-items: center; gap: 6px;">
                                <span style="font-size: 1.25rem; font-weight: 800; color: var(--primary);">${(l.rouge_l*100).toFixed(1)}%</span>
                                <span style="font-size: 0.8rem; color: var(--text-muted); font-weight: 500;">ROUGE-L</span>
                            </div>
                            <div style="width: 1px; background: var(--border-light);"></div>
                            <div style="display: flex; align-items: center; gap: 6px;">
                                <span style="font-size: 1.25rem; font-weight: 800; color: var(--primary);">${(l.bertscore_f1*100).toFixed(1)}%</span>
                                <span style="font-size: 0.8rem; color: var(--text-muted); font-weight: 500;">BERTScore</span>
                            </div>
                        </div>
                        
                        <a href="/comparison.html#custom" class="btn btn-primary btn-lg" style="text-decoration: none; display: inline-flex; align-items: center; gap: 8px;" id="try-demo-btn">
                            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
                            </svg>
                            Try With Your Note
                        </a>
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
    `;const e=document.getElementById("demo-output"),n=document.getElementById("demo-stage");function y(t){return t.replace(/^### (.+)$/gm,'<div style="color:var(--primary); font-size:1.1em; font-weight:700; margin-top:1rem; margin-bottom:0.5rem; border-bottom:1px solid var(--border-light); padding-bottom:4px;">$1</div>').replace(/^([A-Za-z].+?):/gm,'<strong style="color:var(--text-primary);">$1:</strong>').replace(/\n/g,"<br>")}let a=0,c=!1;async function p(t,s=10){if(!e)return;e.innerHTML="",e.classList.add("typing-cursor");let i=0;for(;i<t.length;){if(t[i]==="<"){const r=t.indexOf(">",i);if(r!==-1){e.innerHTML+=t.substring(i,r+1),i=r+1;continue}}e.innerHTML+=t[i],e.scrollTop=e.scrollHeight,i++;const o=s+(Math.random()*10-5);await new Promise(r=>setTimeout(r,o>0?o:5))}e.classList.remove("typing-cursor")}async function f(){if(!c)for(c=!0;;){const t=m[a],s=t.input,i=y(t.finetuned);n&&e&&(n.textContent="Unstructured Input",e.style.fontFamily="monospace",e.style.color="var(--text-primary)",await p(s,20),await new Promise(o=>setTimeout(o,1200)),n.textContent="Processing...",e.innerHTML=`
                    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; gap: 1rem;">
                        <div style="width: 40px; height: 40px; border: 3px solid var(--border-light); border-top-color: var(--primary); border-radius: 50%; animation: spin 1s linear infinite;"></div>
                        <div style="color: var(--text-muted); font-size: 0.875rem;">Converting to SOAP format...</div>
                    </div>
                    <style>
                        @keyframes spin { to { transform: rotate(360deg); } }
                    </style>
                `,await new Promise(o=>setTimeout(o,1500)),n.textContent="SOAP-Formatted Output",e.style.fontFamily="var(--font-sans)",await p(i,4),await new Promise(o=>setTimeout(o,3e3))),a=(a+1)%m.length}}setTimeout(f,500)}const C=document.querySelector("#app");C.innerHTML=`
  <div id="navbar"></div>
  <main style="padding-top: 70px;">
    <div id="hero"></div>
    <div id="results"></div>
  </main>
  
  <footer style="background: #1A1D23; color: #9CA3AF; padding: 0; border-top: none;">
    <!-- Top accent line -->
    <div style="height: 3px; background: linear-gradient(90deg, var(--primary), #3B82F6, #8B5CF6, var(--secondary));"></div>
    
    <div class="container" style="padding: 2rem 0; text-align: center;">
      <div style="display: flex; align-items: center; justify-content: center; gap: 0.625rem; margin-bottom: 0.75rem;">
        <div style="width: 24px; height: 24px; background: linear-gradient(135deg, var(--primary), #3B82F6); border-radius: 6px; display: flex; align-items: center; justify-content: center;">
          <svg width="12" height="12" fill="none" stroke="white" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
        </div>
        <span style="font-size: 1rem; font-weight: 700; color: #fff;">Finetuned Google/medgemma-1.5-4b <span style="color: #60A5FA;">Note</span></span>
      </div>
      
      <p style="font-size: 0.875rem; color: #6B7280; margin-bottom: 1rem;">
        Fine-tuned MedGemma model for clinical note generation.
      </p>
      
      <div style="display: flex; justify-content: center; gap: 1.5rem;">
          <a href="https://github.com/sahabajalam/doctors-scribe-qlora" target="_blank" style="color: #9CA3AF; transition: color .2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#9CA3AF'" title="View on GitHub">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
          <a href="/comparison.html" style="color: #9CA3AF; text-decoration: none; font-size: 0.875rem; display: flex; align-items: center; gap: 6px; transition: color .2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#9CA3AF'">
              Full Comparison <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </a>
      </div>
    </div>
  </footer>
`;const g=document.querySelector("#navbar"),v=document.querySelector("#hero"),u=document.querySelector("#results");g&&b(g);v&&A(v);u&&w(u);
