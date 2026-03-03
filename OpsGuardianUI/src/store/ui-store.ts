import { create } from 'zustand'

interface UiStore {
  sidebarCollapsed: boolean
  mobileSidebarOpen: boolean
  toggleSidebarCollapsed: () => void
  setMobileSidebarOpen: (open: boolean) => void
}

export const useUiStore = create<UiStore>((set) => ({
  sidebarCollapsed: false,
  mobileSidebarOpen: false,
  toggleSidebarCollapsed: () =>
    set((state) => ({ sidebarCollapsed: !state.sidebarCollapsed })),
  setMobileSidebarOpen: (open) => set({ mobileSidebarOpen: open }),
}))
