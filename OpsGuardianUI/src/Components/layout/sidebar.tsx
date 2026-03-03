import { motion } from 'framer-motion'
import { Bell, ChevronLeft, Home, ShieldAlert, Siren, Users } from 'lucide-react'
import { NavLink } from 'react-router-dom'

import { Button } from '@/Components/ui/button'
import { Sheet, SheetContent } from '@/Components/ui/sheet'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/Components/ui/tooltip'
import { cn } from '@/lib/utils'
import { useUiStore } from '@/store/ui-store'

interface SidebarItem {
  label: string
  to: string
  icon: React.ComponentType<{ className?: string }>
}

const SIDEBAR_ITEMS: SidebarItem[] = [
  { label: 'Overview', to: '/', icon: Home },
  { label: 'Incidents', to: '/incidents', icon: ShieldAlert },
  { label: 'Alerts', to: '/alerts', icon: Siren },
  { label: 'Teams', to: '/teams', icon: Users },
  { label: 'Notifications', to: '/notifications', icon: Bell },
]

interface SidebarNavContentProps {
  collapsed: boolean
}

function SidebarNavContent({ collapsed }: SidebarNavContentProps): React.ReactElement {
  return (
    <TooltipProvider delayDuration={120}>
      <nav className='flex flex-col gap-1 p-3'>
        {SIDEBAR_ITEMS.map((item) => {
          const Icon = item.icon

          return (
            <Tooltip key={item.to}>
              <TooltipTrigger asChild>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    cn(
                      'group flex h-10 items-center gap-3 rounded-md px-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground',
                      isActive ? 'bg-primary/10 text-primary' : 'text-muted-foreground',
                      collapsed && 'justify-center px-0',
                    )
                  }
                >
                  <Icon className='h-4 w-4 shrink-0' />
                  {!collapsed && <span>{item.label}</span>}
                </NavLink>
              </TooltipTrigger>
              {collapsed ? <TooltipContent side='right'>{item.label}</TooltipContent> : null}
            </Tooltip>
          )
        })}
      </nav>
    </TooltipProvider>
  )
}

function SidebarDesktop(): React.ReactElement {
  const collapsed = useUiStore((state) => state.sidebarCollapsed)
  const toggle = useUiStore((state) => state.toggleSidebarCollapsed)

  return (
    <motion.aside
      className='hidden border-r bg-card lg:flex lg:flex-col'
      animate={{ width: collapsed ? 76 : 264 }}
      transition={{ duration: 0.25, ease: 'easeInOut' }}
    >
      <div className='flex h-16 items-center justify-between border-b px-3'>
        <span className={cn('font-semibold tracking-tight', collapsed && 'sr-only')}>OpsGuardian</span>
        <Button variant='ghost' size='icon' onClick={toggle} aria-label='Toggle sidebar'>
          <ChevronLeft className={cn('h-4 w-4 transition-transform', collapsed && 'rotate-180')} />
        </Button>
      </div>
      <SidebarNavContent collapsed={collapsed} />
    </motion.aside>
  )
}

function SidebarMobile(): React.ReactElement {
  const open = useUiStore((state) => state.mobileSidebarOpen)
  const setOpen = useUiStore((state) => state.setMobileSidebarOpen)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent side='left' className='p-0'>
        <div className='flex h-16 items-center border-b px-4 font-semibold tracking-tight'>OpsGuardian</div>
        <SidebarNavContent collapsed={false} />
      </SheetContent>
    </Sheet>
  )
}

export function Sidebar(): React.ReactElement {
  return (
    <>
      <SidebarDesktop />
      <SidebarMobile />
    </>
  )
}
