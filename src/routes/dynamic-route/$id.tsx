import { createFileRoute } from '@tanstack/react-router'
import { DotLoading } from 'antd-mobile'

export const Route = createFileRoute('/dynamic-route/$id')({
  loader: async ({ params }) => {
    // params.id will be the dynamic segment
    await new Promise(resolve => setTimeout(resolve, 2000)) // Simulate a delay
    return {
      id: params.id,
    }
  },
  pendingComponent: () => (
    <div className="flex items-center justify-center ">
      <div className="text-center">
        {/* Loading 卡片 */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
          {/* Loading 图标容器 */}
          <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
            <DotLoading color="white" />
          </div>

          {/* 加载文案 */}
          <h2 className="text-base font-bold text-gray-800 mb-2">数据加载中</h2>
          <p className="text-[10px] text-gray-600 mb-4">正在为您获取路由信息，请稍候...</p>

          {/* 进度条装饰 */}
          <div className="w-32 h-1 bg-gray-200 rounded-full mx-auto overflow-hidden">
            <div className="h-full bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full animate-pulse"></div>
          </div>

          {/* 小提示 */}
          <div className="mt-4 text-[10px] flex items-center justify-center space-x-1">
            <svg className="w-3 h-3 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <span>正在解析动态路由参数</span>
          </div>
        </div>
      </div>
    </div>
  ),
  component: RouteComponent,
})

function RouteComponent() {
  const { id } = Route.useLoaderData()

  return (
    <div className=" flex items-center justify-center p-4">
      <div className="max-w-lg w-full">
        {/* 主要内容卡片 */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          {/* 头部装饰 */}
          <div className="h-2 bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600"></div>

          <div className="p-4 text-center">
            {/* 图标 */}
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>

            {/* 标题 */}
            <h1 className="text-[11px] font-bold text-gray-800 mb-1">动态路由页面</h1>
            <p className="text-[10px] text-gray-600 mb-4">您正在访问一个动态路由，路由参数会自动解析</p>

            {/* ID 显示卡片 */}
            <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-xl p-2 border border-emerald-100">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-[10px] font-medium text-gray-700">路由参数</span>
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              </div>

              <div className="bg-white rounded-lg p-2 shadow-sm border border-gray-200">
                <div className="text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">
                  {id}
                </div>
                <div className="text-[10px] mt-0.5 font-mono">
                  params.id
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 信息提示 */}
        <div className="mt-4 text-center">
          <p className="text-[10px]">
            💡 尝试修改 URL 中的 ID 参数，页面内容会动态更新
          </p>
        </div>
      </div>
    </div>
  )
}
