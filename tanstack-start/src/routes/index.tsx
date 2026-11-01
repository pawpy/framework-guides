import { createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'

// A server function: runs on the server, called from the loader.
const getGreeting = createServerFn({ method: 'GET' }).handler(async () => {
  return `Hello from TanStack Start on ${process.env.LIFTOFF_SERVICE_NAME ?? 'Liftoff'}`
})

export const Route = createFileRoute('/')({
  loader: () => getGreeting(),
  component: Home,
})

function Home() {
  const greeting = Route.useLoaderData()
  return (
    <main>
      <h1>{greeting}</h1>
    </main>
  )
}
