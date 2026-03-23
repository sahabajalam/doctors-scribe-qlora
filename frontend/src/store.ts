import { DATA } from './data';
import type { Department, Case } from './data';
import type { Department as DeptType, Case as CaseType } from './data';

// Re-export types for consumers
export type { DeptType, CaseType };

export type ViewMode = 'grid' | 'list';
export type MobileTab = 'original' | 'structured';

interface State {
    selectedDeptId: string | null;
    selectedCaseId: string | null;
    currentView: 'dashboard' | 'department' | 'metrics' | 'live';
    viewMode: ViewMode;
    mobileTab: MobileTab;
    isSidebarOpen: boolean; // For mobile drawer
}

type Listener = (state: State) => void;

class Store {
    private state: State = {
        selectedDeptId: null,
        selectedCaseId: null,
        currentView: 'dashboard',
        viewMode: 'grid',
        mobileTab: 'original',
        isSidebarOpen: false
    };
    private listeners: Set<Listener> = new Set();

    getState() {
        return this.state;
    }

    getDepartment(name: string): Department | undefined {
        return DATA.find(d => d.name === name);
    }

    getCase(deptName: string, caseId: string): Case | undefined {
        const dept = this.getDepartment(deptName);
        return dept?.cases.find(c => c.id === caseId);
    }

    // Actions
    setDepartment(deptId: string | null) {
        this.state.selectedDeptId = deptId;
        this.state.selectedCaseId = null;
        this.state.currentView = deptId ? 'department' : 'dashboard';
        this.state.isSidebarOpen = false; // Close sidebar on selection (mobile)
        this.notify();
    }

    setCase(caseId: string | null) {
        this.state.selectedCaseId = caseId;
        this.state.mobileTab = 'original'; // Reset tab
        this.notify();
    }

    setView(view: 'dashboard' | 'metrics' | 'live') {
        this.state.currentView = view;
        this.state.selectedDeptId = null;
        this.state.selectedCaseId = null;
        this.state.isSidebarOpen = false;
        this.notify();
    }

    setViewMode(mode: ViewMode) {
        this.state.viewMode = mode;
        this.notify();
    }

    setMobileTab(tab: MobileTab) {
        this.state.mobileTab = tab;
        this.notify();
    }

    toggleSidebar(isOpen?: boolean) {
        this.state.isSidebarOpen = isOpen ?? !this.state.isSidebarOpen;
        this.notify();
    }

    subscribe(listener: Listener) {
        this.listeners.add(listener);
        listener(this.state);
        return () => this.listeners.delete(listener);
    }

    private notify() {
        this.listeners.forEach(l => l(this.state));
    }
}

export const store = new Store();
