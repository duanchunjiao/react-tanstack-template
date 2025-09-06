# 🚀 React Mobile App

> 基于 React 19 + TypeScript + Vite 构建的现代化移动端应用

## 📋 项目概述

这是一个使用最新前端技术栈构建的移动端应用项目，采用了现代化的开发工具和最佳实践。

### 🔧 核心框架

- **React 19** - 最新版本的 React 框架
- **TypeScript** - 提供类型安全的开发体验
- **Vite** - 极速构建工具，提供热重载和快速构建

### 🧭 路由管理

- **@tanstack/react-router** - 功能强大的路由库
  - ✅ 比 react-router 更轻量，
  - ✅ 基于文件结构自动生成路由，减少配置
  - ❌ Remix V3 仍在开发中，暂未采用

### 📡 数据管理

- **@tanstack/react-query** - 强大的数据获取和缓存库
  - ✅ 比传统的 useRequest 更好用
  - ✅ 智能缓存和后台更新
- **@tanstack/react-query-devtools** - 开发工具
  - ✅ 实时查看请求状态和缓存情况

### 🎨 UI & 动画

- **TailwindCSS** - 原子化 CSS 框架
  - ✅ 快速构建响应式 UI
  - ✅ 高度可定制化
- **tailwind-variants** - TailwindCSS 组件库
  - ✅ 减少重复的 class 编写
  - ✅ 组件样式复用
- **Framer Motion** - 强大的动画库
  - ✅ 声明式动画 API
  - ✅ 手势识别和拖拽支持

### 📝 表单处理

- **Zod** - TypeScript 优先的数据验证库
  - ✅ 运行时类型验证
  - ✅ 与 TypeScript 完美集成
- **@tanstack/react-form** - 优雅的表单管理库
  - ✅ 类型安全的表单处理
  - ✅ 性能优化的表单验证

### 🗃 状态管理

- **Jotai** ✅ - 原子化状态管理
  - ✅ 细粒度的状态更新
  - ✅ 避免不必要的重新渲染
- **Zustand** - 备选方案
  - 🔄 简单易用的状态管理库

---

### 🗃 工程化

- **eslint v9 + prettier + husky + commitlint** ✅ -
  - ✅ antfu格式化

---

## 🚀 快速开始

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build

# 预览生产构建
pnpm preview
```

---

## 📁 项目结构

```
src/
├── api/           # API 请求相关
├── assets/        # 静态资源
├── routes/        # 路由页面组件
└── main.tsx       # 应用入口文件
```

---

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request 来改进这个项目！

## 📄 许可证

MIT License
