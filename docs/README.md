# React TypeScript Template

一个现代化的 React TypeScript 开发模板，预配置了最佳实践的工具链和开发体验。

## ✨ 特性

- ⚡ **Vite** - 极速的构建工具和开发服务器
- ⚛️ **React 18** - 最新版本的 React
- 🔷 **TypeScript** - 类型安全的 JavaScript
- 🎨 **Tailwind CSS** - 实用优先的 CSS 框架
- 🧪 **Jest + Testing Library** - 全面的测试解决方案
- 📏 **ESLint + Prettier** - 代码质量和格式化
- 🔧 **Husky + lint-staged** - Git 钩子和预提交检查
- 📦 **pnpm** - 快速、节省磁盘空间的包管理器

## 🚀 快速开始

### 环境要求

- Node.js >= 18.0.0
- pnpm >= 8.0.0

### 安装和运行

```bash
# 克隆模板 (或使用 GitHub Template 功能)
git clone <your-repo-url>
cd your-project-name

# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build

# 预览生产构建
pnpm preview
```

## 📁 项目结构

```
src/
├── components/          # 可复用组件
│   ├── ui/             # 基础 UI 组件
│   └── index.ts        # 组件导出
├── hooks/              # 自定义 React Hooks
├── types/              # TypeScript 类型定义
├── utils/              # 工具函数
├── pages/              # 页面组件 (可选)
├── App.tsx             # 主应用组件
└── main.tsx            # 应用入口点
```

## 🔧 配置说明

### Tailwind CSS

项目使用 Tailwind CSS v4，配置在 `vite.config.ts` 中。主要特点：

- 使用 `@tailwindcss/vite` 插件
- 在 `src/index.css` 中通过 `@import "tailwindcss"` 引入
- 包含自定义工具函数 `cn()` 用于类名合并

### 路径别名

配置了 `@` 别名指向 `src` 目录：

```typescript
// 可以这样导入
import { Button } from '@/components';
import { cn } from '@/utils';
```

### 代码质量

- **ESLint**: 代码静态分析和错误检查
- **Prettier**: 代码格式化
- **Husky**: Git 钩子管理
- **lint-staged**: 只对暂存文件运行检查

## 📚 扩展功能

### 添加路由

使用 React Router v6：

```bash
pnpm add react-router-dom
pnpm add -D @types/react-router-dom
```

参考示例配置：[ROUTER.md](./docs/ROUTER.md)

### 添加状态管理

推荐使用 Zustand：

```bash
pnpm add zustand
```

### 添加 API 请求

推荐使用 TanStack Query + Axios：

```bash
pnpm add @tanstack/react-query axios
```

### 添加 UI 组件库

推荐使用 Radix UI 或 Headless UI：

```bash
# Radix UI
pnpm add @radix-ui/react-*

# Headless UI
pnpm add @headlessui/react
```

## 🧪 测试

```bash
# 运行测试
pnpm test

# 监听模式运行测试
pnpm test:watch

# 生成测试覆盖率报告
pnpm test:coverage
```

## 📝 可用脚本

```bash
pnpm dev          # 启动开发服务器
pnpm build        # 构建生产版本
pnpm preview      # 预览生产构建
pnpm test         # 运行测试
pnpm lint         # 运行 ESLint
pnpm lint:fix     # 修复 ESLint 错误
pnpm format       # 格式化代码
pnpm type-check   # TypeScript 类型检查
pnpm clean        # 清理构建文件
```

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License
