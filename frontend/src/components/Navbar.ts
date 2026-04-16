// Navbar component

export function renderNavbar(container: HTMLElement) {
    container.innerHTML = `
        <style>
            .navbar {
                position: fixed; top: 0; left: 0; right: 0; z-index: 100;
                background: rgba(255, 255, 255, 0.85);
                backdrop-filter: blur(16px) saturate(180%);
                -webkit-backdrop-filter: blur(16px) saturate(180%);
                border-bottom: 1px solid rgba(0,0,0,.06);
            }
            .navbar-container {
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 64px;
                max-width: 1280px;
                margin: 0 auto;
                padding: 0 1.5rem;
            }
            .brand-link {
                text-decoration: none; display: flex; align-items: center; gap: 0.75rem; transition: opacity .15s;
            }
            .brand-link:hover { opacity: 0.8; }
            .brand-logo {
                width: 34px; height: 34px; background: linear-gradient(135deg, var(--primary), #0051A3);
                border-radius: 10px; display: flex; align-items: center; justify-content: center; color: white;
                box-shadow: 0 2px 8px rgba(0,102,204,.25);
            }
            .brand-text {
                font-size: 1.125rem; font-weight: 700; color: var(--text-primary); letter-spacing: -0.02em;
            }
            .nav-gh {
                padding: 6px; border-radius: 8px; color: var(--text-muted);
                text-decoration: none; display: flex; align-items: center;
                transition: color .15s, background .15s;
            }
            .nav-gh:hover { color: var(--text-primary); background: rgba(0,0,0,.04); }
            @media (max-width: 768px) {
                .brand-text { font-size: 1rem; }
            }
        </style>
        <nav class="navbar">
            <div class="navbar-container">
                <a href="/" class="brand-link">
                    <div class="brand-logo">
                        <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                        </svg>
                    </div>
                    <span class="brand-text">
                        MedGeemaSOAP <span style="color: var(--primary);">Demo</span>
                    </span>
                </a>

                <a href="https://github.com/sahabajalam/doctors-scribe-qlora" target="_blank" class="nav-gh" aria-label="GitHub">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
            </div>
        </nav>
    `;
}
