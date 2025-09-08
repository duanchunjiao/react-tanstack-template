import { useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { fetchData } from '../../api'
import './index.css'

export const Route = createFileRoute('/query-list/')({
  component: RouteComponent,
})

function RouteComponent() {
  // const navigate = useNavigate()
  //  1、支持预加载
  //  2、支持缓存
  //  3、支持过期自动释放内存
  //  4、支持失败重试
  //  5、支持切换窗口时不重新获取数据
  //  6、支持手动刷新、分页

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
      <h2
        className="mb-4 text-center text-base font-bold text-blue-700"
        onClick={() => {
          refetch()
        }}
      >
        人员列表
      </h2>
      <div></div>
      <div className="flex flex-wrap justify-center gap-3 space-x-2">
        {data?.map((item: any) => (
          <div
            key={item.id}
            className="group flex cursor-pointer flex-col gap-1.5 rounded-lg border border-gray-100 bg-white p-4 shadow-md transition-shadow duration-200 hover:border-blue-300 hover:shadow-lg"
            onClick={() => {
              // navigate(`/query-list/details/${item.id}`)
            }}
          >
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-blue-200 to-purple-200 text-[10px] font-bold text-blue-700 transition-transform duration-200 group-hover:scale-110">
                {item.name?.[0] || '?'}
              </div>
              <div className="text-sm font-semibold text-gray-800">{item.name}</div>
            </div>
            <div className="pl-8 text-[10px] text-gray-500">
              📞
              {item.phone}
            </div>
            <div className="pl-8 text-[10px] text-gray-500">
              ✉️
              {item.email}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
