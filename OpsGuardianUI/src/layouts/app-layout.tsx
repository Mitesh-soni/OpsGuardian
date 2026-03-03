import { Outlet } from 'react-router-dom'

import { Sidebar } from '@/Components/layout/sidebar'
import { TopNavbar } from '@/Components/layout/top-navbar'

export function AppLayout(): React.ReactElement {
  return (
    <div className='min-h-screen bg-background text-foreground'>
      <div className='flex min-h-screen'>
        <Sidebar />
        <div className='flex min-h-screen min-w-0 flex-1 flex-col'>
          <TopNavbar />
          <main className='flex-1 p-4 lg:p-6'>
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}
