import { createFileRoute } from '@tanstack/react-router'

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

  return (
    <div className="w-full">

      {/* 调试信息 */}
      <div className="mt-6 p-3 bg-gray-50 rounded-lg border border-gray-200">
        <h4 className="text-[10px] font-medium text-gray-700 mb-1">父组件信息</h4>
        <div className="text-[10px] text-gray-600 bg-white p-2 rounded-md border">
          <p className="font-mono">
            {JSON.stringify(user, null, 2)}
          </p>
        </div>
      </div>

    </div>
  )
}
