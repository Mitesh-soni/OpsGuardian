import { Bell, ShieldCheck, Timer, Zap } from 'lucide-react'

import { Badge } from '@/Components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/Components/ui/card'
import { Skeleton } from '@/Components/ui/skeleton'

const KPI_ITEMS = [
  { title: 'Open Incidents', value: '24', icon: ShieldCheck, trend: '+3.2%' },
  { title: 'Avg MTTR', value: '18m', icon: Timer, trend: '-6.4%' },
  { title: 'Alert Volume', value: '1,204', icon: Bell, trend: '+1.1%' },
  { title: 'Automation Runbook', value: '87%', icon: Zap, trend: '+4.7%' },
]

export function DashboardPage(): React.ReactElement {
  return (
    <section className='space-y-6'>
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='text-2xl font-semibold tracking-tight'>Operations Overview</h1>
          <p className='text-sm text-muted-foreground'>Real-time visibility across incidents, alerts, and on-call response.</p>
        </div>
        <Badge variant='secondary'>SLA Healthy</Badge>
      </div>

      <div className='grid gap-4 sm:grid-cols-2 xl:grid-cols-4'>
        {KPI_ITEMS.map(({ title, value, icon: Icon, trend }) => (
          <Card key={title}>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>{title}</CardTitle>
              <Icon className='h-4 w-4 text-muted-foreground' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>{value}</div>
              <p className='text-xs text-muted-foreground'>vs. last period {trend}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Incident Feed</CardTitle>
          <CardDescription>Live updates from integrated monitoring sources.</CardDescription>
        </CardHeader>
        <CardContent className='space-y-3'>
          <Skeleton className='h-10 w-full' />
          <Skeleton className='h-10 w-full' />
          <Skeleton className='h-10 w-full' />
        </CardContent>
      </Card>
    </section>
  )
}
