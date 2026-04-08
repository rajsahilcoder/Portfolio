# Project Architecture: Sahil.AI

This document outlines the architectural decisions and patterns used in the Sahil Raj Portfolio website. As a senior developer, the goal was to create a codebase that is not only scalable but also a testament to Sahil's engineering standards.

## 1. Core Principles

- **SOLID Compliance**: Each module has a single responsibility.
- **CLEAN Code**: Self-documenting code with clear separation of concerns.
- **OOP Patterns**: Use of interfaces and abstraction to ensure modularity.
- **Constraints**: Strict < 300 lines of code per file policy.

## 2. Section Registry Pattern

The website is architected as a collection of pluggable sections managed by a central `SectionManager`.

### `ISection` Interface

Located in `src/core/types.ts`:

```typescript
export interface ISection {
  id: string;
  title: string;
  component: ReactNode;
  icon?: ReactNode;
}
```

### `SectionManager`

The `SectionManager` component (`src/components/layout/SectionManager.tsx`) iterates over a registry of sections and renders them. This allows us to:

- Add or remove sections without touching the core `App.tsx` logic.
- Maintain high modularity and testability.

## 3. Data Decoupling

To adhere to the principle of "Separation of Data and Presentation," all resume-related content is stored in `src/core/constants.ts`. The UI components import this data, allowing for easy updates and potential future integration with a headless CMS.

## 4. Design System

Styling is centrally maintained in `src/styles/global.css` using CSS Variables. This ensures:

- Consistent look and feel across all modular components.
- Single point of change for theme updates (e.g., changing the accent blue).
- No inline styles, as requested by the user.

## 5. Feature-Based Modularity

Each major part of the site (Hero, About, Projects) resides in `src/features/[feature_name]`. This keeps code related to a specific domain together, preventing file bloating.
