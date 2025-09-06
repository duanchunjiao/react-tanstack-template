import { createFileRoute, Outlet } from '@tanstack/react-router'

async function getUserInfo() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ token: '123' })
    }, 1000)
  })
}

export const Route = createFileRoute('/auth')({
  beforeLoad: async () => {
    console.log('=== 父路由 /auth beforeLoad 开始执行 ===')
    const user = await getUserInfo()
    console.log('获取到的用户信息:', user)
    console.log('=== 父路由 /auth beforeLoad 执行完毕 ===')
    return { user } // 传递给子路由
  },
  component: AuthLayout,
})

function AuthLayout() {
  return (
    <div className="  flex flex-col items-center justify-center p-3">
      <div className="w-full bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-4 border border-white/20">
        <div className="text-center mb-4">
          <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mx-auto mb-3 flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h2 className="text-base font-bold text-gray-800 mb-1">auth路由嵌套</h2>
        </div>

        {/* 子路由内容会在这里渲染 */}
        <Outlet />

      </div>
    </div>
  )
}
