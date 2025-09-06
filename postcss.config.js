import cssMergeLonghand from 'postcss-merge-longhand'
import pxToRem from 'postcss-pxtorem'
import tailwindcss from 'tailwindcss'

export default {
  plugins: [
    tailwindcss,
    cssMergeLonghand,
    pxToRem({
      rootValue: 16, // 根元素字体大小，（tainwindcsss就是基于16来做的转换 需要跟它适配）
      unitPrecision: 5, // rem 单位的小数位数
      propList: ['*'], // 需要转换的属性，* 表示所有属性
      selectorBlackList: [], // 不进行转换的选择器黑名单
      replace: true, // 是否替换原有的 px 单位
      mediaQuery: false, // 是否转换媒体查询中的 px
      minPixelValue: 2, // 小于该值的 px 不会被转换
      exclude(file) { // 使用新配置的精确排除规则
        return file.includes('node_modules/antd-mobile')
      },
      unitToConvert: 'px',
    }),
  ],
}
