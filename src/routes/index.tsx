import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="text-center py-4 animate-fade-in">
      {/* 欢迎图标 */}
      <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 via-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
        <svg className="w-12 h-12 text-white animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>

      {/* 主标题 */}
      <h1 className="text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-emerald-600 mb-2">
        欢迎来到首页
      </h1>

      {/* 副标题 */}
      <p className="text-[11px] text-gray-600 mb-4 max-w-md mx-auto leading-relaxed">
        这里是你的专属空间，探索无限可能
      </p>

      {/* 装饰性元素 */}
      <div className="flex justify-center items-center space-x-2 mb-4">
        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
      </div>

      {/* 底部提示 */}
      <div className="mt-4 text-[11px] text-gray-500 flex items-center justify-center space-x-2">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
        <span>使用上方导航栏探索更多功能</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </div>

    </div>
  )
}
