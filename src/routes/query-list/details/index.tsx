import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(`/query-list/details/`)({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/query-list/details/"!</div>
}
