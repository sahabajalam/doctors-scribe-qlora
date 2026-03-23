import { DATA } from '../data';
import { store } from '../store';

export function renderSidebar(container: HTMLElement) {
  const state = store.getState();

  // Base classes
  const mobileClasses = `fixed inset-y-0 left-0 z-30 w-64 bg-slate-900 text-slate-300 transform transition-transform duration-300 ease-in-out ${state.isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`;
  const desktopClasses = "hidden md:flex w-64 bg-slate-900 text-slate-300 flex-col h-full border-r border-slate-800 shrink-0";

  container.className = `${desktopClasses} ${mobileClasses}`; // Note: This logic needs to be handled by parent or conditionally rendered. 
  // Actually, we can just use "md:flex" and handle mobile class toggle separately, OR render two sidebars (one drawer, one static).
  // Better approach: One sidebar, styled conditionally.

  // Resetting className based on simple conditional logic is tricky if we want responsive + toggle.
  // Strategy: Always render it.
  // Desktop: relative, translate-0.
  // Mobile: absolute/fixed, toggles translate.

  container.className = `
    fixed md:relative z-30 inset-y-0 left-0 w-64 bg-slate-950 text-slate-400 flex flex-col transition-transform duration-300 ease-in-out border-r border-indigo-500/10
    ${state.isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
  `;

  container.innerHTML = `
    <div class="h-16 flex items-center px-6 border-b border-white/5 md:hidden">
       <span class="font-bold text-white tracking-wide">Menu</span>
       <button id="close-sidebar" class="ml-auto text-slate-500 hover:text-white">
         <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
       </button>
    </div>

    <div class="flex-1 overflow-y-auto p-4 custom-scrollbar">
      
      <div class="mb-6">
        <div class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 px-2">Apps</div>
        <nav class="space-y-1">
           <button id="nav-dashboard" class="w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-3 ${state.currentView === 'dashboard' ? 'bg-indigo-600/10 text-indigo-400' : 'text-slate-400 hover:bg-white/5 hover:text-white'}">
             <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
             Dashboard
           </button>
           <button id="nav-live" class="w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-3 ${state.currentView === 'live' ? 'bg-indigo-600/10 text-indigo-400' : 'text-slate-400 hover:bg-white/5 hover:text-white'}">
             <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
             Live Processing
           </button>
           <button id="nav-metrics" class="w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-3 ${state.currentView === 'metrics' ? 'bg-indigo-600/10 text-indigo-400' : 'text-slate-400 hover:bg-white/5 hover:text-white'}">
             <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
             Model Metrics
           </button>
        </nav>
      </div>

      <div class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 px-2">Departments</div>
      <nav class="space-y-1">
        ${DATA.map(dept => {
    const isActive = state.selectedDeptId === dept.name && state.currentView === 'department';
    return `
            <button 
              data-dept="${dept.name}"
              class="w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all group flex items-center justify-between
              ${isActive
        ? 'bg-indigo-600/10 text-indigo-400'
        : 'text-slate-400 hover:bg-white/5 hover:text-white'
      }"
            >
              <span>${dept.name}</span>
              ${isActive ? '<div class="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>' : ''}
            </button>
          `;
  }).join('')}
      </nav>
    </div>
    
    <div class="mt-auto p-4 border-t border-white/5">
       <div class="bg-indigo-500/20 rounded-xl p-4 border border-indigo-500/20">
         <h3 class="text-white text-xs font-bold mb-1">AI Powered</h3>
         <p class="text-xs text-indigo-200/70">Notes are structured automatically.</p>
       </div>
    </div>
  `;

  // Overlay for mobile (created only if sidebar is open and mobile)
  // We'll handle overlay in AppShell

  container.querySelector('#nav-dashboard')?.addEventListener('click', () => {
    store.setView('dashboard');
  });

  container.querySelector('#nav-live')?.addEventListener('click', () => {
    store.setView('live');
  });

  container.querySelector('#nav-metrics')?.addEventListener('click', () => {
    store.setView('metrics');
  });

  // Overlay for mobile (created only if sidebar is open and mobile)
  // We'll handle overlay in AppShell

  container.querySelectorAll('button[data-dept]').forEach(btn => {
    btn.addEventListener('click', () => {
      const dept = btn.getAttribute('data-dept');
      store.setDepartment(dept);
    });
  });

  container.querySelector('#close-sidebar')?.addEventListener('click', () => {
    store.toggleSidebar(false);
  });
}
