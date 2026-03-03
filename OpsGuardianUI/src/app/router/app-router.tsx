import { createBrowserRouter } from 'react-router-dom'

import { AuthLayout } from '@/layouts/auth-layout'
import { AppLayout } from '@/layouts/app-layout'
import { LoginPage } from '@/features/auth/pages/login-page'
import { DashboardPage } from '@/features/dashboard/pages/dashboard-page'
import { PlaceholderPage } from '@/features/dashboard/pages/placeholder-page'
import { ProtectedRoute } from '@/app/router/protected-route'

export const appRouter = createBrowserRouter([
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <AppLayout />,
        children: [
          {
            path: '/',
            element: <DashboardPage />,
          },
          {
            path: '/incidents',
            element: (
              <PlaceholderPage
                title='Incidents'
                description='Track incident lifecycle, ownership, and SLA compliance.'
              />
            ),
          },
          {
            path: '/alerts',
            element: <PlaceholderPage title='Alerts' description='Review alert health and escalation paths.' />,
          },
          {
            path: '/teams',
            element: <PlaceholderPage title='Teams' description='Manage responders, schedules, and escalation policies.' />,
          },
          {
            path: '/notifications',
            element: (
              <PlaceholderPage title='Notifications' description='Configure channels and notification preferences.' />
            ),
          },
        ],
      },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <LoginPage />,
      },
    ],
  },
])
