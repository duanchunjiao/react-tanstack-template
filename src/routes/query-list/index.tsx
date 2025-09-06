import { useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { fetchData } from '../../api'
import './index.css'

export const Route = createFileRoute('/query-list/')({
  component: RouteComponent,
})

function RouteComponent() {
  // const navigate = useNavigate()
  const { data, refetch, isLoading, isFetching, isRefetching } = useQuery({
    queryKey: ['query-list'],
    queryFn: async () => fetchData('people'),
    retry: 1, // 失败重试次数
    refetchOnWindowFocus: false, // 切换窗口时不重新获取数据
    enabled: true, // 是否启用该查询
    staleTime: 10 * 1000, // 数据在10秒内不会过期，避免频繁请求
    gcTime: 5 * 1000, // 数据在5s后被垃圾回收 释放内存
  })

  console.log('data', isLoading, isFetching, isRefetching)
  /*
  1.不加staleTime，默认每次先读取缓存数据，然后再发送请求，数据回来后更新
  2.加了staleTime，数据在staleTime时间内不会过期，读取缓存数据，不会发送请求
  3.加了staleTime，并且设置了refetchOnWindowFocus: false, 切换窗口时不会重新发送请求
  **/
  // if (isLoading) {
  //   return <div>加载中...</div>
  // }
  // if (isFetching) {
  //   return <div>请求中...</div>
  // }
  // if (isRefetching) {
  //   return <div>再次请求中...</div>
  // }
  return (
    <div className="">
      <h1 className="title">哈哈哈哈</h1>
      <h1 className="text-[30px]">hi</h1>
      <h2
        className="text-base font-bold mb-4 text-center text-blue-700"
        onClick={() => {
          refetch()
        }}
      >
        人员列表
      </h2>
      <div>
      </div>
      <div className="space-x-2 gap-3 flex flex-wrap justify-center">
        {data?.map((item: any) => (
          <div
            key={item.id}
            className="rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-200 p-4 flex flex-col gap-1.5 border border-gray-100 hover:border-blue-300 cursor-pointer group"
            onClick={() => {
              // navigate(`/query-list/details/${item.id}`)
            }}
          >
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-200 to-purple-200 flex items-center justify-center text-[10px] font-bold text-blue-700 group-hover:scale-110 transition-transform duration-200">
                {item.name?.[0] || '?'}
              </div>
              <div className="text-sm font-semibold text-gray-800">{item.name}</div>
            </div>
            <div className="text-gray-500 text-[10px] pl-8">
              📞
              {item.phone}
            </div>
            <div className="text-gray-500 text-[10px] pl-8">
              ✉️
              {item.email}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
