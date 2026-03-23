import { store } from '../store';
import type { Department } from '../data';

export function renderCaseGrid(container: HTMLElement, dept: Department) {
  container.classList.add("p-6", "md:p-8", "animate-fade-in");

  container.innerHTML = `
    <div class="mb-8">
      <h2 class="text-3xl font-bold text-slate-800 tracking-tight">${dept.name}</h2>
      <p class="text-slate-500 mt-2 text-lg">Select a case to view structured notes.</p>
    </div>
    
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      ${dept.cases.map((c, i) => `
        <button 
          data-case="${c.id}"
          class="group relative bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all duration-300 text-left flex flex-col h-56 overflow-hidden"
        >
          <div class="absolute top-0 right-0 p-4 opacity-50 text-slate-200 group-hover:text-indigo-50 transition-colors">
            <svg class="w-24 h-24 transform translate-x-8 -translate-y-8" fill="currentColor" viewBox="0 0 24 24"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
          </div>
          
          <div class="relative z-10 flex flex-col h-full">
            <div class="flex items-center justify-between mb-4">
              <span class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 text-sm font-bold">
                ${i + 1}
              </span>
              <span class="text-xs font-semibold text-slate-400 group-hover:text-indigo-500 transition-colors">View Note &rarr;</span>
            </div>
            
            <h3 class="font-medium text-slate-700 group-hover:text-slate-900 line-clamp-3 leading-relaxed">
              ${c.description}
            </h3>
            
            <div class="mt-auto pt-4 flex items-center gap-2 text-xs text-slate-400">
               <span class="bg-emerald-50 text-emerald-600 px-2 py-1 rounded-full">Processed</span>
               <span>•</span>
               <span>${c.input.length} chars</span>
            </div>
          </div>
          
          <div class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </button>
      `).join('')}
    </div>
  `;

  container.querySelectorAll('button[data-case]').forEach(btn => {
    btn.addEventListener('click', () => {
      store.setCase(btn.getAttribute('data-case'));
    });
  });
}
