import { create } from 'zustand'

import type { UserProfile } from '@/types/auth'

interface AuthStore {
  isAuthenticated: boolean
  user: UserProfile | null
  login: (user: UserProfile) => void
  logout: () => void
}

export const useAuthStore = create<AuthStore>((set) => ({
  isAuthenticated: true,
  user: {
    id: 'ops-1',
    name: 'Ops Admin',
    email: 'admin@opsguardian.com',
  },
  login: (user) => set({ isAuthenticated: true, user }),
  logout: () => set({ isAuthenticated: false, user: null }),
}))
