import { Toast } from 'antd-mobile'
import ky from 'ky'
import { LOGIN_CREDENTIAL } from './constant'

function createHttpClient(baseConfig: { prefixUrl: string, appId?: string, productLine?: string }) {
  return ky.create({
    prefixUrl: baseConfig.prefixUrl,
    retry: 0,
    hooks: {
      beforeRequest: [
        (request) => {
          request.headers.set(LOGIN_CREDENTIAL, '123')
          baseConfig.appId && request.headers.set('App-Id', baseConfig.appId)
          baseConfig.productLine && request.headers.set('Product-Line', baseConfig.productLine)
        },
      ],
      afterResponse: [
        async (_request, _options, res) => {
          const { status, ok } = res
          if (ok && status >= 200 && status < 300) {
            const data = await res.json()
            return new Response(JSON.stringify(data), {
              status: res.status,
              headers: res.headers,
            })
          }
          if (!ok) {
            const errorData = await res.json()
            console.log(errorData)
            const errorMsg = errorData?.error_msg || res.statusText
            Toast.show({ content: errorMsg, duration: 3000 }) // 显示 toast 提示
          }
        },
      ],
    },
  })
}

// 创建不同的客户端实例
export const mainApiClient = createHttpClient({
  prefixUrl: import.meta.env.VITE_BASE_URL,
})

export const authApiClient = createHttpClient({
  prefixUrl: 'https://auth.example.com/',
  appId: 'AUTH_APP',
  productLine: 'AUTH',
})

export const paymentApiClient = createHttpClient({
  prefixUrl: 'https://payment.example.com/',
  appId: 'PAYMENT_APP',
  productLine: 'PAYMENT',
})
