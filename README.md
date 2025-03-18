# CodeForge Template

## 🚀 Overview

CodeForge is a sophisticated starter template designed for modern web application development. It leverages TurboRepo, pnpm, and TypeScript to provide a robust foundation that emphasizes developer experience, performance, and scalability.

## ✨ Features

- **📦 Monorepo Architecture** - Organized workspace structure with TurboRepo for optimal code sharing and dependency management
- **⚡ Lightning Fast Builds** - Incremental builds and smart caching for maximum development speed
- **🔒 Type Safety** - Full TypeScript integration across all packages and applications
- **🧩 Pre-configured Tools** - ESLint, Prettier, Vitest, and other essential developer tools ready to use
- **🔄 CI Ready** - Pre-configured GitHub Actions workflows for continuous integration

## 🛠️ Tech Stack

- [TurboRepo](https://turbo.build/) - High-performance build system
- [pnpm](https://pnpm.io/) - Fast, disk space-efficient package manager
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript at scale
- [React](https://reactjs.org/) - UI component library
- [Next.js](https://nextjs.org/) - React framework for production
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework

## 📋 Prerequisites

- Node.js 18.x or later
- pnpm 8.x or later

## 🚀 Getting Started

### Quick Start

```bash
# Create a new project
npx @codeforge/template

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

## 📁 Project Structure

```
codeforge/
├── apps/
│   ├── api/          # API server (Node.js, Knex, TS)
│   └── web/          # Frontend (Next.js, TailwindCSS)
├── packages/
│   ├── buildkit/     # Build utilities
│   ├── client/       # Shared API clients
│   ├── datakit/      # Data handling utilities
│   ├── emailkit/     # Email utilities
│   ├── serverkit/    # Server-side helpers
│   ├── testkit/      # Testing utilities
│   ├── tsconfig/     # Shared TypeScript configs
│   ├── ui/           # Reusable UI components
│   └── utils/        # General utilities
├── .github/          # GitHub workflows/config
├── .vscode/          # VS Code settings
├── docker-compose.yaml
├── turbo.json        # Turborepo tasks config
├── pnpm-workspace.yaml
└── package.json

```

## 🧩 Available Scripts

- `pnpm dev` - Start development servers for all applications
- `pnpm build` - Build all applications and packages
- `pnpm lint` - Run ESLint across the entire codebase
- `pnpm test` - Run tests for all packages and applications

## 🤝 Contributing

Contributions are welcome! Please check out our [contributing guidelines](CONTRIBUTING.md) for details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📬 Contact

- GitHub: [Jack-WebDev](https://github.com/Jack-WebDev)
