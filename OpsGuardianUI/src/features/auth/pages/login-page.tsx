import { useNavigate } from 'react-router-dom'

import { Button } from '@/Components/ui/button'
import { Input } from '@/Components/ui/input'
import { useAuthStore } from '@/store/auth-store'

export function LoginPage(): React.ReactElement {
  const login = useAuthStore((state) => state.login)
  const navigate = useNavigate()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()

    login({
      id: 'ops-1',
      name: 'Ops Admin',
      email: 'admin@opsguardian.com',
    })

    navigate('/')
  }

  return (
    <form className='space-y-4' onSubmit={handleSubmit}>
      <div className='space-y-1'>
        <h1 className='text-xl font-semibold tracking-tight'>Sign in to OpsGuardian</h1>
        <p className='text-sm text-muted-foreground'>Use your workspace credentials to continue.</p>
      </div>

      <Input type='email' placeholder='Email' required />
      <Input type='password' placeholder='Password' required />

      <Button type='submit' className='w-full'>
        Sign in
      </Button>
    </form>
  )
}
