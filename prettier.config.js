export default {
  semi: false, // 不使用分号
  singleQuote: true, // 使用单引号
  arrowParens: 'avoid', // 单参数箭头函数省略括号
  jsxBracketSameLine: false, // 强制闭合括号换行
  printWidth: 120,
  bracketSpacing: true,
  endOfLine: 'auto', // 换行符自动
  tabWidth: 2, // 缩进
  plugins: [
    'prettier-plugin-tailwindcss',
  ],
}
