import { useMutation } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { useAtom } from 'jotai'
import { mainApiClient } from '../../service'
import { userInfoAtom } from '../atom/authInfoAtom'
import WxLogo from './images/weixin.svg?react'

export const Route = createFileRoute('/request-list/')({
  component: RouteComponent,
})

function RouteComponent() {
  const [userInfo] = useAtom(userInfoAtom)

  const fetchData = async () => {
    const res = await mainApiClient.get('people')
    return await res.json()
  }

  const changeNameMutation = useMutation({
    mutationFn: fetchData,
    onSuccess: () => {
      setTimeout(() => {
        changeNameMutation.reset()
      }, 3000)
    },
    onMutate: () => {},
  })

  return (
    <div>
      <WxLogo className="h-10 w-10" />
      Hello "/request-list/"!
      <p>
        jotai全局信息：
        {userInfo?.token}
      </p>
    </div>
  )
}
