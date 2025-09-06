import antfu from '@antfu/eslint-config'
import reactHooks from 'eslint-plugin-react-hooks'

export default antfu({
  type: 'react',
  plugins: {
    'react-hooks': reactHooks,
  },
  rules: {
    // 强制启用 Hooks 核心规则
    'react-hooks/rules-of-hooks': 'error', // 检查 Hooks 调用位置
    'react-hooks/exhaustive-deps': 'error', // 检查依赖项完整性
  },
})
