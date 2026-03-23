import { store } from '../store';
import type { Case } from '../data';

export function renderReader(container: HTMLElement, caseItem: Case) {
  const state = store.getState();

  // Layout depends on mobile vs desktop. We render both structures and hide/show via CSS
  // OR we use the state to toggle (but resizing window wouldn't update unless we listen to resize).
  // CSS Grid/Flex is best.

  container.classList.add("flex", "flex-col", "h-full", "bg-slate-50", "relative", "overflow-hidden");

  container.innerHTML = `
    <!-- Top Bar Navigation (Context) -->
    <div class="bg-white border-b border-slate-200 px-4 py-3 flex items-center gap-4 shrink-0 shadow-sm z-10">
      <button id="back-grid" class="p-2 hover:bg-slate-100 rounded-full text-slate-500 transition-colors">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
      </button>
      <div class="overflow-hidden">
        <div class="text-xs font-bold text-indigo-500 uppercase tracking-wider">Case ${caseItem.id}</div>
        <div class="text-sm font-medium text-slate-700 truncate">${caseItem.description}</div>
      </div>
      
      <!-- Mobile Tabs Switcher -->
      <div class="ml-auto flex md:hidden bg-slate-100 rounded-lg p-1 gap-1">
        <button data-tab="original" class="px-3 py-1.5 text-xs font-medium rounded-md transition-all ${state.mobileTab === 'original' ? 'bg-white shadow text-slate-800' : 'text-slate-500'}">Original</button>
        <button data-tab="structured" class="px-3 py-1.5 text-xs font-medium rounded-md transition-all ${state.mobileTab === 'structured' ? 'bg-white shadow text-indigo-600' : 'text-slate-500'}">structured</button>
      </div>
    </div>
    
    <!-- Content Area -->
    <div class="flex-1 relative overflow-hidden">
      <div class="absolute inset-0 flex flex-col md:flex-row">
        
        <!-- Original Note Pane -->
        <div class="
          w-full md:w-1/2 h-full flex flex-col border-r border-slate-200 bg-[#fffdf5] 
          transition-transform duration-300 absolute md:relative
          ${state.mobileTab === 'original' ? 'translate-x-0 z-10' : '-translate-x-full md:translate-x-0 z-0'}
        ">
           <div class="px-6 py-3 border-b border-amber-200/50 bg-amber-50 flex items-center justify-between shadow-sm">
             <span class="text-xs font-bold text-amber-800 flex items-center gap-2">
               <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
               RAW INPUT
             </span>
           </div>
           <div class="flex-1 overflow-y-auto p-6 font-mono text-sm leading-relaxed text-slate-700 whitespace-pre-wrap">
${caseItem.input}
           </div>
        </div>
        
        <!-- Structured Note Pane -->
        <div class="
          w-full md:w-1/2 h-full flex flex-col bg-white
          transition-transform duration-300 absolute md:relative
          ${state.mobileTab === 'structured' ? 'translate-x-0 z-10' : 'translate-x-full md:translate-x-0 z-0'}
        ">
           <div class="px-6 py-3 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between shadow-sm">
             <span class="text-xs font-bold text-indigo-600 flex items-center gap-2">
               <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
               AI STRUCTURED
             </span>
           </div>
           <div class="flex-1 overflow-y-auto p-8 prose prose-slate prose-sm max-w-none">
             ${formatStructuredNote(caseItem.output)}
           </div>
        </div>
        
      </div>
    </div>
  `;

  // Handlers
  container.querySelector('#back-grid')?.addEventListener('click', () => {
    store.setCase(null);
  });

  container.querySelectorAll('button[data-tab]').forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.getAttribute('data-tab') as any;
      store.setMobileTab(tab);
    });
  });
}

function formatStructuredNote(text: string): string {
  // Enhanced formatting
  return text
    .replace(/^### (.*$)/gm, '<h3 class="text-lg font-bold text-slate-800 mt-6 mb-3 flex items-center gap-2"><div class="w-1 h-4 bg-indigo-500 rounded-full"></div>$1</h3>')
    .replace(/^## (.*$)/gm, '<h2 class="text-xl font-bold text-slate-900 mt-8 mb-4 border-b border-slate-100 pb-2">$1</h2>')
    .replace(/\n/g, '<br />')
    // Highlights keys
    .replace(/([A-Z][a-zA-Z\s]+):/g, '<strong class="text-slate-900">$1:</strong>');
}
