# Architecture

## Overview

PersonalWorkspace is a frontend web application built with Angular and TypeScript.

Its purpose is to provide a maintainable, responsive, and accessible platform for presenting professional information, technical skills, software projects, and engineering evidence.

The application remains intentionally simple and proportional to its current scope. New abstractions, services, libraries, or architectural patterns are introduced only when a concrete requirement justifies them.

## Architectural Goals

The application is designed to be:

- Maintainable.
- Responsive.
- Accessible.
- Easy to extend.
- Structured by clear responsibilities.
- Simple and proportional to the current project scope.
- Easy to explain and defend from an engineering perspective.

## Current Scope

PersonalWorkspace is currently a frontend-only application.

It does not include:

- Custom backend.
- Authentication.
- Database.
- Server-side rendering.

These capabilities will only be considered if a future requirement provides a concrete reason to introduce them.

## Application Organization

The application is organized around functional areas.

Closely related Angular files remain grouped together so that each area is easy to locate, understand, test, and maintain.

The current functional areas are:

- Application layout.
- Header and navigation.
- Professional introduction.
- Technical skills.
- Projects.
- Contact information.
- Footer.
- Back-to-top interaction.

Components represent clear and cohesive parts of the user interface.

Reusable components are introduced when the same presentation or behavior is required in multiple places. Data models, services, and additional abstractions are added only when application behavior requires them.

## Information Architecture

The current interface contains the following areas:

1. Header / Navigation
  - Project identity.
  - Navigation to the main sections.
  - Responsive mobile navigation.
  - Language selector.
  - Light and dark theme control.

2. Hero
  - Professional introduction.
  - Short description of the professional profile.
  - Professional profile image.
  - Primary call to action for projects.
  - Reserved CV download control until the final public CV is available.

3. Skills
  - Main technical skills.
  - Technologies and engineering practices grouped by relevant areas.
  - Selected local technology icons used as decorative visual support.

4. Projects
  - Verified software project evidence.
  - Project description.
  - Technologies used.
  - Source code link when available.
  - Live demo link when available.

5. Contact
  - Professional contact section.
  - GitHub and LinkedIn profile links.

6. Footer
  - Copyright information.
  - Professional profile links.

7. Back to Top
  - Provides a convenient return to the top of the document after scrolling.
  - Appears only after the user has moved sufficiently down the page.

## Application Layout

```text
[ Sticky Header ]
[ Navigation | Language | Theme ]

[ Hero Section ]
[ Professional introduction | Profile image ]
[ Projects action | Reserved CV control ]

[ Skills Section ]
[ Technical skills grouped by area ]

[ Projects Section ]
[ Verified Project Cards ]
[ Source and live-demo links when available ]

[ Contact Section ]
[ Professional profile links ]

[ Footer ]
[ Copyright | Professional links ]

[ Back-to-Top Control ]
```

## Responsive Behavior

The interface follows a mobile-first approach.

- Sections stack vertically on small screens.
- Navigation changes to a hamburger menu when horizontal space is limited.
- Desktop navigation is displayed when sufficient space is available.
- The hero layout adapts between stacked and wider-screen arrangements.
- Project cards use a single-column layout on smaller screens.
- Larger layouts use additional columns when appropriate.
- Spacing and typography adapt to the available viewport.
- Interactive controls remain usable with keyboard navigation.

Responsive behavior is implemented primarily through Tailwind CSS utility classes.

## Theme Behavior

The application supports light and dark themes.

Theme behavior follows these rules:

- When no preference has been stored, the application respects the user's system color preference.
- A manual theme change is persisted in `localStorage`.
- The selected theme is applied through a `dark` class on the root HTML element.
- Theme initialization occurs before Angular renders the interface to reduce visible theme changes during application startup.

Theme support remains a presentation concern and does not introduce an application service because the current scope does not require shared asynchronous state or more complex theme management.

## Internationalization

The application supports:

- English (`en-US`) as the source locale.
- Spanish (`es`) as an additional locale.

Angular's official localization mechanism is used through `@angular/localize`.

Translatable content is marked in Angular templates and TypeScript where required.

Translation messages are stored in:

```text
src/locale/messages.xlf
src/locale/messages.es.xlf
```

Localized application variants are generated during the build process.

The deployment structure is:

```text
/personal-workspace/      -> English
/personal-workspace/es/   -> Spanish
```

The language selector navigates between these localized application variants.

This approach keeps localization aligned with Angular's compile-time localization model and avoids introducing a separate runtime translation library.

## Angular Component Structure

The application currently uses the following components:

- `App`
  - Root application component.
  - Composes the main application interface.

- `Header`
  - Displays project identity.
  - Provides desktop and mobile navigation.
  - Controls theme selection.
  - Provides navigation between localized application variants.

- `Hero`
  - Displays the professional introduction.
  - Displays the professional profile image.
  - Includes the primary projects call to action.
  - Reserves the future CV download position without linking to a nonexistent file.

- `Skills`
  - Displays the main technical skills.
  - Groups technologies and engineering practices by relevant areas.
  - Uses selected local technology icons as decorative presentation assets.

- `Projects`
  - Displays verified software project evidence.
  - Coordinates project information.

- `ProjectCard`
  - Represents an individual software project.
  - Displays the project description and technologies.
  - Displays a source code link when available.
  - Displays a live demo link when available.
  - Is reusable across multiple projects.

- `Contact`
  - Displays the professional contact section and available profile links.

- `Footer`
  - Displays copyright information and professional profile links.

- `BackToTop`
  - Observes page scrolling.
  - Displays a return-to-top control when appropriate.
  - Uses smooth scrolling when activated.

## Component Responsibilities

Components remain focused on the user interface and interactions related to their own functional area.

Complex logic is not placed directly in templates.

Logic that can exist independently of a specific interface should not remain in presentation components when its complexity justifies extraction.

New services, models, shared utilities, or reusable abstractions will only be introduced when a concrete requirement justifies them.

## Styling Strategy

Tailwind CSS is the primary styling and responsive-design tool.

Utility classes are used directly in Angular templates to define:

- Layout.
- Spacing.
- Typography.
- Responsive behavior.
- Interaction states.
- Light and dark theme variants.

Global CSS remains limited to configuration and application-wide behavior that cannot be expressed appropriately at the component level.

## Static Assets

Public static resources are stored under `public/`.

Current assets include:

- Professional profile image.
- Favicons and web app manifest.
- Selected technology icons used by the Skills section.

Technology icons are stored locally under:

```text
public/icons/
```

The current local icon set contains:

```text
angular.png
astro.svg
git.svg
typescript.png
```

These icons are decorative because each technology name is also rendered as visible text.

Technologies or engineering practices without an appropriate local brand asset remain text-only rather than introducing unnecessary icon libraries or external runtime dependencies.

## Localization Build Strategy

Localized production builds are generated using Angular CLI localization:

```bash
ng build --localize
```

For GitHub Pages, the repository base path is supplied during deployment:

```bash
ng build --localize --base-href /personal-workspace/
```

Angular adjusts the resulting base paths according to the configured locale subpaths.

## Testing Strategy

Testing focuses on behavior that provides meaningful confidence in the application.

Current tests cover:

- Component creation.
- Mobile navigation interaction.
- Theme switching and persistence.
- Language-selection behavior.
- Project repository and live-demo link behavior.
- Relevant component behavior.

Tests are not added solely to increase a coverage number.

The current automated suite contains 9 test files and 15 passing tests.

## Deployment Architecture

The application is deployed as a static frontend through GitHub Pages.

GitHub Actions provides two related workflows:

- `ci.yml` validates pushes to `main` and pull requests targeting `main`.
- `deploy.yml` validates and publishes the production application after pushes to `main` or manual execution.

The deployment workflow performs the following sequence:

1. Checks out the repository.
2. Configures the Node.js environment.
3. Installs dependencies with `npm ci`.
4. Runs the automated test suite.
5. Builds the localized Angular application using the GitHub Pages base path.
6. Configures GitHub Pages.
7. Uploads the generated browser output as the Pages artifact.
8. Deploys that artifact.

The deployment job depends on successful completion of the validation and build job. A failed test or build therefore prevents the deployment job from running.

The generated static application is published from:

```text
dist/personal-workspace/browser
```

No application server, backend runtime, or database is required for the current architecture.

## Architectural Evolution

The architecture should evolve only when a real requirement justifies the additional complexity.

Examples of future requirements that could justify architectural changes include:

- Dynamic data from an API.
- Authentication.
- Persistent user data.
- Server-side rendering.
- More complex shared application state.
- Additional localization requirements.

Until such requirements exist, the application should remain simple, frontend-only, and easy to maintain.
