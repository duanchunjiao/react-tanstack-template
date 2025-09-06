import { tanstackRouter } from '@tanstack/router-plugin/vite'
import legacy from '@vitejs/plugin-legacy' // 导入插件
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
// import { createHtmlPlugin } from 'vite-plugin-html'
import svgr from 'vite-plugin-svgr'

// // https://vite.dev/config/
export default defineConfig(() => {
  return {
    plugins: [
      tanstackRouter({ target: 'react', autoCodeSplitting: true }),
      react(),
      svgr({
        include: '**/*.svg?react',
        svgrOptions: {
          plugins: [
            // 一般两者一起使用
            '@svgr/plugin-svgo', // 启用 SVGO 压缩优化
            '@svgr/plugin-jsx', // JSX 转换
          ],
          svgoConfig: {
            floatPrecision: 2, // 设置压缩精度
          },
        },
      }),
      legacy({
        targets: ['defaults', 'not IE 11'],
      }),
    ],
    resolve: {},
    server: {
      open: true,
    },
    build: {
      sourcemap: false,
      rollupOptions: {
        output: {
          // 代码分割策略
          manualChunks: {
            react: ['react', 'react-dom'], // 单独打包 React 相关库
            utils: ['lodash', 'ky'], // 工具库单独打包
          },
        },
      },
    },
  }
})
