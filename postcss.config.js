import tailwindcss from '@tailwindcss/postcss'
import cssMergeLonghand from 'postcss-merge-longhand'
import pxToviewport from 'postcss-px-to-viewport-8-plugin'

export default {
  plugins: [
    tailwindcss,
    cssMergeLonghand,
    pxToviewport({
      propList: ['*'],
      viewportWidth: 375, // 视窗宽度，对应设计稿宽度
      unitPrecision: 5, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
      viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw
      minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
      mediaQuery: false, // 允许在媒体查询中转换`px`
      replace: true, // 是否直接更换属性值，而不添加备用属性
      exclude: [/node_modules\/antd-mobile/],
    }),

  ],
}
