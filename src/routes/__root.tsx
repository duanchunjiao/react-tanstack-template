import { createRootRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 p-4 ">
      {/* 响应式容器：移动端宽度自适应，PC端限制最大宽度 */}
      <div className="flex w-full flex-col items-center rounded-3xl bg-white/90 px-6 py-6 shadow-2xl backdrop-blur-sm lg:max-w-[50%]">
        {/* 主标题 - 响应式字体大小 */}
        <div className="mb-4 text-center">
          <h1 className="mb-1 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 bg-clip-text text-base font-extrabold text-transparent drop-shadow-lg">
            React + TanStack
          </h1>
          <p className="text-[11px] font-medium text-gray-600">移动端项目模版</p>
          <p className="text-[11px] font-medium text-gray-600">预览（请同时开启 pnpm json-server）</p>
          <div className="mx-auto mt-1 h-0.5 w-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"></div>
        </div>

        {/* 优美的引导文案 - 响应式布局 */}
        <div className="mb-4 text-center">
          <div className="inline-flex items-center rounded-full border border-purple-200/50 bg-gradient-to-r from-purple-50 to-blue-50 px-2 py-1 shadow-sm">
            <svg
              className="mr-1 h-2.5 w-2.5 animate-bounce text-purple-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-[10px] font-medium text-gray-700">探索功能特性，点击下方导航开始体验</span>
            <svg
              className="ml-1 h-2.5 w-2.5 animate-pulse text-blue-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
        </div>

        {/* 导航按钮网格 - 响应式网格和间距 */}
        <div className="mb-3 grid w-full grid-cols-2 gap-1.5">
          <Link
            to="/dynamic-route/$id"
            params={{ id: '123' }}
            className="group relative rounded-md bg-gradient-to-r from-emerald-400 to-cyan-500 px-2 py-2 text-center text-[11px] font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="flex flex-col items-center">
              <svg
                className="mb-0.5 h-3 w-3 group-hover:animate-bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>动态路由</span>
              <span className="mt-0.5 text-[11px] opacity-80">Dynamic Routes</span>
            </div>
          </Link>

          <Link
            to="/auth/login"
            className="group relative rounded-md bg-gradient-to-r from-purple-400 to-indigo-500 px-2 py-2 text-center text-[11px] font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="flex flex-col items-center">
              <svg
                className="mb-0.5 h-3 w-3 group-hover:animate-pulse"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              <span>路由嵌套</span>
              <span className="mt-0.5 text-[11px] opacity-80">Nested Routes</span>
            </div>
          </Link>

          <Link
            to="/search"
            className="group relative rounded-md bg-gradient-to-r from-orange-400 to-pink-500 px-2 py-2 text-center text-[11px] font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="flex flex-col items-center">
              <svg
                className="mb-0.5 h-3 w-3 group-hover:animate-spin"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              <span>Mutation 使用</span>
              <span className="mt-0.5 text-[11px] opacity-80">Data Mutation</span>
            </div>
          </Link>

          <Link
            to="/query-list"
            className="group relative rounded-md bg-gradient-to-r from-blue-400 to-violet-500 px-2 py-2 text-center text-[11px] font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="flex flex-col items-center">
              <svg
                className="mb-0.5 h-3 w-3 group-hover:animate-pulse"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                />
              </svg>
              <span>Query 使用</span>
              <span className="mt-0.5 text-[11px] opacity-80">Data Fetching</span>
            </div>
          </Link>
        </div>

        <Outlet />

        <Link to="/">回到首页</Link>
      </div>
    </div>
  )
}
