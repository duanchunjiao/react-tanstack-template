import { createFileRoute } from '@tanstack/react-router'
import WxLogo from './images/weixin.svg?react'

export const Route = createFileRoute('/request-list/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      Hello "/request-list/"!
      <WxLogo className="w-10 h-10" />
    </div>
  )
}
