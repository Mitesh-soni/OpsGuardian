import { RouterProvider } from 'react-router-dom'

import { appRouter } from '@/app/router/app-router'

export function AppProvider(): React.ReactElement {
  return <RouterProvider router={appRouter} />
}
