export function renderNavigation(container: HTMLElement) {
    container.innerHTML = `
        <nav style="position: fixed; top: 0; left: 0; right: 0; z-index: 100; background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(10px); border-bottom: 1px solid var(--border-color); box-shadow: var(--shadow-sm);">
            <div class="container" style="display: flex; justify-content: space-between; align-items: center; padding: 1rem 1.5rem;">
                <div style="display: flex; align-items: center; gap: 0.75rem;">
                    <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: 800; color: white;">
                        MS
                    </div>
                    <span style="font-weight: 700; font-size: 1.125rem; color: var(--text-primary);">Medical Scribe AI</span>
                </div>
                
                <div id="nav-links" style="display: flex; gap: 2rem; align-items: center;">
                    <a href="#hero" class="nav-link" data-target="hero" style="color: var(--text-secondary); text-decoration: none; font-weight: 500; transition: color 0.3s; padding: 0.5rem; border-bottom: 2px solid transparent; cursor: pointer;">
                        Home
                    </a>
                    <a href="#metrics" class="nav-link" data-target="metrics" style="color: var(--text-secondary); text-decoration: none; font-weight: 500; transition: color 0.3s; padding: 0.5rem; border-bottom: 2px solid transparent; cursor: pointer;">
                        Metrics
                    </a>
                    <a href="#live-demo" class="nav-link" data-target="live-demo" style="color: var(--text-secondary); text-decoration: none; font-weight: 500; transition: color 0.3s; padding: 0.5rem; border-bottom: 2px solid transparent; cursor: pointer;">
                        Live Demo
                    </a>
                    <a href="#examples" class="nav-link" data-target="examples" style="color: var(--text-secondary); text-decoration: none; font-weight: 500; transition: color 0.3s; padding: 0.5rem; border-bottom: 2px solid transparent; cursor: pointer;">
                        Examples
                    </a>
                </div>
                
                <button id="mobile-menu-btn" style="display: none; background: none; border: none; color: var(--text-primary); cursor: pointer;">
                    <svg style="width: 24px; height: 24px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </nav>
        
        <style>
            .nav-link.active {
                color: var(--primary) !important;
                border-bottom-color: var(--primary) !important;
            }
            
            .nav-link:hover {
                color: var(--primary) !important;
            }
            
            @media (max-width: 768px) {
                #nav-links {
                    display: none;
                    position: absolute;
                    top: 100%;
                    left: 0;
                    right: 0;
                    background: rgba(255, 255, 255, 0.98);
                    backdrop-filter: blur(10px);
                    flex-direction: column;
                    padding: 1rem;
                    gap: 0.5rem !important;
                    border-bottom: 1px solid var(--border-color);
                    box-shadow: var(--shadow-md);
                }
                
                #nav-links.active {
                    display: flex !important;
                }
                
                #mobile-menu-btn {
                    display: block !important;
                }
            }
        </style>
    `;

    // Setup scroll spy and mobile menu
    const navLinks = container.querySelectorAll('.nav-link');
    const mobileMenuBtn = container.querySelector('#mobile-menu-btn');
    const navLinksContainer = container.querySelector('#nav-links');

    // Smooth scroll with proper event handling
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('data-target');
            if (targetId) {
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    navLinksContainer?.classList.remove('active');
                }
            }
        });
    });

    // Mobile menu toggle
    mobileMenuBtn?.addEventListener('click', () => {
        navLinksContainer?.classList.toggle('active');
    });

    // Scroll spy
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('data-target') === entry.target.id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, { threshold: 0.3, rootMargin: '-80px 0px -80% 0px' });

    // Observe all sections
    setTimeout(() => {
        ['hero', 'metrics', 'live-demo', 'examples'].forEach(id => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });
    }, 500);
}
