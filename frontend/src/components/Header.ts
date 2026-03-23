import { store } from '../store';

export function renderHeader(container: HTMLElement) {
  const state = store.getState();

  container.className = "h-16 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center justify-between px-4 sticky top-0 z-20";

  container.innerHTML = `
    <div class="flex items-center gap-3">
      <!-- Mobile Menu Button -->
      <button id="menu-btn" class="md:hidden p-2 text-slate-500 hover:bg-slate-100 rounded-lg">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
      </button>
      
      <!-- Logo / Title -->
      <!-- Logo / Title -->
      <button id="home-btn" class="flex items-center gap-2 hover:opacity-80 transition-opacity">
        <div class="hidden sm:flex w-8 h-8 bg-indigo-600 rounded-lg items-center justify-center text-white font-bold shadow-lg shadow-indigo-200">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
        </div>
        <h1 class="font-bold text-slate-800 text-lg tracking-tight block">Finetuned Google/medgemma-1.5-4b</h1>
      </button>

      <!-- Breadcrumbs (Desktop) -->
      <div class="hidden md:flex items-center text-sm text-slate-500 ml-4 border-l border-slate-200 pl-4 h-8">
        <span>Departments</span>
        ${state.selectedDeptId ? `
          <svg class="w-4 h-4 mx-2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
          <span class="font-medium text-slate-900">${state.selectedDeptId}</span>
        ` : ''}
        ${state.selectedCaseId ? `
          <svg class="w-4 h-4 mx-2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
          <span class="font-medium text-slate-900">Case ${state.selectedCaseId}</span>
        ` : ''}
      </div>
    </div>

    <!-- Actions -->
    <div class="flex items-center gap-2">
      <a href="https://github.com/sahabajalam/doctors-scribe-qlora" target="_blank" class="p-2 text-slate-400 hover:text-slate-600 transition-colors">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
      </a>
      <div class="w-8 h-8 rounded-full bg-slate-200 border-2 border-white shadow-sm overflow-hidden">
        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sara" alt="Dr. Sara" />
      </div>
    </div>
  `;

  // Listeners
  container.querySelector('#menu-btn')?.addEventListener('click', () => {
    const currentState = store.getState();
    store.toggleSidebar(!currentState.isSidebarOpen);
  });

  container.querySelector('#home-btn')?.addEventListener('click', () => {
    store.setDepartment(null);
  });
}
