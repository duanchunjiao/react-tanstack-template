import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="animate-fade-in py-4 text-center">
      {/* 欢迎图标 */}
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 via-blue-500 to-purple-600 shadow-lg">
        <svg className="h-12 w-12 animate-pulse text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>

      {/* 主标题 */}
      <h1 className="mb-2 bg-gradient-to-r from-purple-600 via-blue-600 to-emerald-600 bg-clip-text text-base font-bold text-transparent">
        欢迎来到首页
      </h1>

      {/* 副标题 */}
      <p className="mx-auto mb-4 max-w-md text-[11px] leading-relaxed text-gray-600">
        这里是你的专属空间，探索无限可能
      </p>

      {/* 装饰性元素 */}
      <div className="mb-4 flex items-center justify-center space-x-2">
        <div className="h-2 w-2 animate-bounce rounded-full bg-purple-400"></div>
        <div className="h-2 w-2 animate-bounce rounded-full bg-blue-400" style={{ animationDelay: '0.1s' }}></div>
        <div className="h-2 w-2 animate-bounce rounded-full bg-emerald-400" style={{ animationDelay: '0.2s' }}></div>
      </div>

      {/* 底部提示 */}
      <div className="mt-4 flex items-center justify-center space-x-2 text-[11px] text-gray-500">
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
        <span>使用上方导航栏探索更多功能</span>
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </div>
    </div>
  )
}
