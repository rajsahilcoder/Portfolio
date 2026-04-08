# Sahil Raj | Agentic Architect Portfolio

A professional, unique, and highly scalable portfolio website built by a senior software developer for an AI Systems Engineer. This project showcases Sahil Raj's expertise in Agentic AI, high-scale microservices, and modern web architecture.

## 🚀 Vision: The Agentic Architect

The portfolio is designed as an **Autonomous AI Agent Control Center**. It doesn't just list skills; it demonstrates them through an interactive, modular, and performance-driven interface.

## 🛠️ Tech Stack

- **Core:** React 19, TypeScript
- **Tooling:** Vite, PostCSS, Autoprefixer
- **UI/UX:** Framer Motion, Lucide React, Glassmorphism 2.0
- **Architecture:** SOLID Principles, OOP, Modular Section Registry

## 📂 Project Structure

```text
/src
  /app        <- Application root & entry component
  /components <- Atomic & Layout components (e.g., SectionManager)
  /features   <- Feature-based modules (Hero, About, Projects)
  /core       <- Domain types, constants, and abstract logic
  /styles     <- Centralized CSS variables and utility classes
  /assets     <- Static assets (Profile Pic, Resume PDF)
/docs         <- Technical documentation and architecture ADRs
```

## 🏗️ Architecture

This project follows a **Section Registry Pattern**. Each section (Hero, About, etc.) is a standalone module that implements a unified interface, ensuring the codebase remains modular and under the 300-line-per-file limit.

See [ARCHITECTURE.md](./docs/ARCHITECTURE.md) for a deep dive.

## ⚙️ Getting Started

### Prerequisites

- Node.js (v18+)
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

## 📄 License

Custom Portfolio License - Sahil Raj
