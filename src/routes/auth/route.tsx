import { createFileRoute, Outlet } from '@tanstack/react-router'
import { getDefaultStore } from 'jotai'
import { userInfoAtom } from '../atom/authInfoAtom'

async function getUserInfo() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ token: '123' })
    }, 1000)
  })
}

const store = getDefaultStore()

export const Route = createFileRoute('/auth')({
  beforeLoad: async () => {
    const user = await getUserInfo()
    store.set(userInfoAtom, user)
    return { user } // 传递给子路由
  },
  component: AuthLayout,
})

function AuthLayout() {
  return (
    <div className="  flex flex-col items-center justify-center p-3">
      <div className="w-full rounded-2xl border border-white/20 bg-white/90 p-4 shadow-xl backdrop-blur-sm">
        <div className="mb-4 text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-600">
            <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
          <h2 className="mb-1 text-base font-bold text-gray-800">auth路由嵌套</h2>
        </div>

        {/* 子路由内容会在这里渲染 */}
        <Outlet />
      </div>
    </div>
  )
}
