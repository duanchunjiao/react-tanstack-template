/**
 * 自适应字体设置配置接口
 */
interface FlexibleOptions {
  /** 设计稿基准宽度，默认 375px */
  UIWidth?: number
  /** 基础字体大小，默认 16px */
  baseSize?: number
  /** 最小字体大小，默认 12px */
  minSize?: number
  /** 最大字体大小，默认 32px */
  maxSize?: number
}

interface FlexibleInstance {
  /** 初始化自适应字体设置 */
  init: () => void
  /** 手动设置根字体大小 */
  setRootFontSize: () => void
}

/**
 * 创建动态根字体设置函数
 * @param options 配置选项
 * @returns
 */
function createFlexible(options: FlexibleOptions = {}): FlexibleInstance {
  const {
    UIWidth = 375,
    baseSize = 16,
    minSize = 12,
    maxSize = 32,
  } = options

  let isInitialized = false

  function setRootFontSize() {
    const doc = document.documentElement
    const clientWidth = doc.clientWidth || window.innerWidth
    const fontSize = Math.min(Math.max((clientWidth / UIWidth) * baseSize, minSize), maxSize)
    doc.style.fontSize = `${fontSize}px`
  }

  function handleResize() {
    setRootFontSize()
  }

  function handleOrientationChange() {
    setTimeout(setRootFontSize, 100) // 延迟执行，等待方向改变完成
  }

  function init() {
    if (isInitialized)
      return

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', setRootFontSize)
    }
    else {
      setRootFontSize()
    }
    window.addEventListener('resize', handleResize)
    window.addEventListener('orientationchange', handleOrientationChange)
    isInitialized = true
  }

  return {
    init,
    setRootFontSize,
  }
}

const flexible = createFlexible({
  UIWidth: 375,
  baseSize: 16,
  minSize: 12,
  maxSize: 32,
})

flexible.init()
