import { Outlet } from 'react-router-dom'

export function AuthLayout(): React.ReactElement {
  return (
    <div className='grid min-h-screen place-items-center bg-muted/30 p-4'>
      <div className='w-full max-w-md rounded-lg border bg-card p-6 shadow-sm'>
        <Outlet />
      </div>
    </div>
  )
}
