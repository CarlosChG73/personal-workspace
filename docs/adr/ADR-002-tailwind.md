# ADR-002: Use Tailwind CSS for Styling

## Status

Accepted

## Context

PersonalWorkspace requires a responsive, maintainable, and visually consistent frontend without introducing a separate component library or a large custom CSS architecture.

The project also needs to support responsive layouts, interaction states, and light and dark themes while keeping the styling approach proportional to the current scope.

## Alternatives Considered

- Tailwind CSS
- Plain CSS
- Angular component libraries

## Decision

Use Tailwind CSS as the primary styling and responsive-design tool.

## Rationale

Tailwind CSS provides:

- Utility classes for layout, spacing, typography, and interaction states.
- Responsive variants that support a mobile-first implementation.
- Dark-mode variants for the application's light and dark themes.
- A styling approach that integrates directly with Angular templates.
- Reduced need for large custom stylesheets for the current application scope.

Angular provides official guidance for integrating Tailwind CSS into Angular applications.

The project does not currently require a full UI component library because the interface is intentionally small and its components are implemented directly in Angular.

## Consequences

Positive:

- Consistent styling across components.
- Responsive behavior can be expressed close to the related markup.
- Light and dark theme variants can be implemented without adding another styling framework.
- Less custom CSS is required for the current interface.
- Styling remains easy to inspect alongside the component structure.

Trade-offs:

- Angular templates contain additional utility classes.
- Developers must understand Tailwind's utility conventions.
- Repeated utility combinations may require refactoring if the interface becomes significantly larger.
- Tailwind should not be used as justification for adding unnecessary visual complexity.
