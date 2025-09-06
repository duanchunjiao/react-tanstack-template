import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/dynamic-route/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/dynamic-route/"!</div>
}
