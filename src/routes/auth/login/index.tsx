import { createFileRoute } from '@tanstack/react-router'
import { useAtom } from 'jotai'
import { userInfoAtom } from '../../atom/authInfoAtom'

export const Route = createFileRoute('/auth/login/')({
  beforeLoad: async ({ context }) => {
    return {
      user: context.user,
    }
  },
  // 使用 loader 来获取 beforeLoad 的数据
  loader: async ({ context }) => {
    return {
      user: context.user,
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const { user } = Route.useLoaderData()

  const [userInfo] = useAtom(userInfoAtom)

  return (
    <div className="w-full">
      {/* 调试信息 */}
      <div className="mt-6 rounded-lg border border-gray-200 bg-gray-50 p-3">
        <h4 className="mb-1 text-[10px] font-medium text-gray-700">父组件信息</h4>
        <div className="rounded-md border bg-white p-2 text-[10px] text-gray-600">
          <p className="font-mono">
            context传递：
            {JSON.stringify(user, null, 2)}
          </p>
          jotai全局管理：
          {JSON.stringify(userInfo?.token, null, 2)}
        </div>
      </div>
    </div>
  )
}
