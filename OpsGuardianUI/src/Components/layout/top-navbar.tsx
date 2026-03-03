import { motion } from 'framer-motion'
import { Menu, Settings } from 'lucide-react'

import { Avatar, AvatarFallback } from '@/Components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/Components/ui/dropdown-menu'
import { Input } from '@/Components/ui/input'
import { Button } from '@/Components/ui/button'
import { useAuthStore } from '@/store/auth-store'
import { useUiStore } from '@/store/ui-store'

export function TopNavbar(): React.ReactElement {
  const setMobileSidebarOpen = useUiStore((state) => state.setMobileSidebarOpen)
  const user = useAuthStore((state) => state.user)
  const logout = useAuthStore((state) => state.logout)

  return (
    <header className='sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60 lg:px-6'>
      <Button
        variant='ghost'
        size='icon'
        onClick={() => setMobileSidebarOpen(true)}
        className='lg:hidden'
        aria-label='Open sidebar'
      >
        <Menu className='h-4 w-4' />
      </Button>

      <div className='hidden items-center gap-2 lg:flex'>
        <span className='text-base font-semibold tracking-tight'>OpsGuardian</span>
      </div>

      <div className='max-w-md flex-1'>
        <Input type='search' placeholder='Search incidents, alerts, teams...' />
      </div>

      <Button variant='ghost' size='icon' aria-label='Settings'>
        <motion.div whileHover={{ rotate: 90 }} transition={{ duration: 0.3, ease: 'easeInOut' }}>
          <Settings className='h-4 w-4' />
        </motion.div>
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='ghost' className='h-10 w-10 rounded-full p-0' aria-label='Profile menu'>
            <Avatar className='h-9 w-9'>
              <AvatarFallback>{user?.name?.charAt(0) ?? 'U'}</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          <DropdownMenuLabel>{user?.name ?? 'User'}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Account Settings</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={logout}>Sign out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  )
}
