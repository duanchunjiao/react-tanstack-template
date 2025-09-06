const api_port = import.meta.env.VITE_BASE_URL

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export async function fetchData(url: string, ms: number = 2000) {
  try {
    const res = await fetch(`${api_port}/${url}`)
    if (ms) {
      await delay(ms)
    }
    const { status, ok } = res
    if (ok && status >= 200) {
      return await res.json()
    }
  }
  catch (error) {
    console.log(error)
  }
}
