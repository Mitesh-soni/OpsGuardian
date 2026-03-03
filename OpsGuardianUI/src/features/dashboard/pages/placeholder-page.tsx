import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/Components/ui/card'

interface PlaceholderPageProps {
  title: string
  description: string
}

export function PlaceholderPage({ title, description }: PlaceholderPageProps): React.ReactElement {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className='text-sm text-muted-foreground'>
        This section is ready for feature module implementation.
      </CardContent>
    </Card>
  )
}
