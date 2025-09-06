import { tanstackRouter } from '@tanstack/router-plugin/vite'
import legacy from '@vitejs/plugin-legacy' // 导入插件
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import svgr from 'vite-plugin-svgr'

// // https://vite.dev/config/
export default defineConfig(({ mode }) => {
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
      createHtmlPlugin({
        template: './index.html', // 关联 HTML 模板
        inject: {
          data: {
            // 定义需要注入的 JS 资源（支持数组形式，方便循环）
            injectScripts: [
              mode === 'development' ? 'https://cdn.example.com/prod-script.js' : '',
            ].filter(Boolean), // 过滤空值（避免生成空的 script 标签）
          },
          // 可选：指定注入位置（'head' | 'body-prepend' | 'body-append'）
          // injectTo: 'head',
        },
      }),
    ],
    resolve: {

    },
    server: {
      open: true,
    },
    build: {
      sourcemap: false,
      rollupOptions: {
        output: { // 代码分割策略
          manualChunks: {
            react: ['react', 'react-dom'], // 单独打包 React 相关库
            utils: ['lodash', 'ky'], // 工具库单独打包
          },
        },
      },
    },
  }
})
