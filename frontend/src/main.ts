import './style.css';
import { renderNavbar } from './components/Navbar';
import { renderHero } from './components/Hero';
import { renderMetrics } from './components/Results';

// Main application
const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
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
          <a href="https://github.com/sahabajalam/medgeema-soap-qlora" target="_blank" style="color: #9CA3AF; transition: color .2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#9CA3AF'" title="View on GitHub">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
          <a href="/comparison.html" style="color: #9CA3AF; text-decoration: none; font-size: 0.875rem; display: flex; align-items: center; gap: 6px; transition: color .2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#9CA3AF'">
              Full Comparison <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </a>
      </div>
    </div>
  </footer>
`;

// Render components
const navbarContainer = document.querySelector('#navbar') as HTMLElement;
const heroContainer = document.querySelector('#hero') as HTMLElement;
const resultsContainer = document.querySelector('#results') as HTMLElement;

if (navbarContainer) renderNavbar(navbarContainer);
if (heroContainer) renderHero(heroContainer);
if (resultsContainer) renderMetrics(resultsContainer);
