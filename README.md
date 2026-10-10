# PersonalWorkspace

PersonalWorkspace is a professional personal platform for presenting software development skills, technical projects, and engineering decisions through practical development evidence.

## Problem

A traditional resume provides limited space to demonstrate how software is designed, implemented, tested, documented, and delivered.

PersonalWorkspace provides a central place to present technical evidence beyond a resume.

## Objective

Build a modern, responsive, accessible, and maintainable frontend application that demonstrates the correct use of current web development practices without positioning the project as a frontend specialization.

The project is intended to demonstrate the ability to develop and maintain the frontend layer when a software solution requires it.

## Live Demo

The application is publicly available through GitHub Pages:

https://carloschg73.github.io/personal-workspace/

## Current MVP

The current MVP includes:

- Professional introduction.
- Professional profile image.
- Technical skills section.
- Projects section.
- Reusable project card component.
- Professional contact section.
- Sticky header.
- Responsive desktop and mobile navigation.
- Hamburger navigation on smaller screens.
- Light and dark themes.
- Theme preference persistence.
- English and Spanish localized versions.
- Back-to-top interaction.
- Mobile, tablet, and desktop layouts.
- Basic keyboard navigation validation.
- Automated component tests.
- Continuous integration with GitHub Actions.
- Automated deployment to GitHub Pages.

The current MVP does not include:

- Custom backend.
- Authentication.
- Database.
- Server-side rendering.

These capabilities will only be considered if future requirements justify them.

## Technology Stack

### Frontend

- Angular 22.
- TypeScript.
- HTML5.
- Tailwind CSS.
- Angular localization with `@angular/localize`.

### Development and Quality

- npm.
- Git.
- GitHub.
- Vitest.
- GitHub Actions.

## Architecture

The application follows a simple component-based frontend architecture organized around functional areas.

The main functional areas are:

- Application layout.
- Header and navigation.
- Hero.
- Skills.
- Projects.
- Project card.
- Contact.
- Footer.
- Back-to-top interaction.

The root application component composes these functional areas into the main page.

Reusable components and abstractions are introduced only when a concrete requirement justifies them.

The application remains frontend-only. Additional services, models, backend capabilities, or architectural abstractions will only be introduced when actual application requirements justify them.

More information is available in:

- [Architecture documentation](docs/architecture.md)
- [Architecture Decision Records](docs/adr/)

## Responsive Design

The interface follows a mobile-first approach.

The layout has been manually validated for:

- Mobile.
- Tablet.
- Desktop.

Responsive utilities are used to adapt navigation, typography, spacing, grids, and component layouts according to the available screen size.

On smaller screens, the main navigation changes to a hamburger menu.

## Theme Support

The application supports light and dark themes.

Theme behavior includes:

- System color preference detection when no manual preference has been stored.
- Manual theme switching.
- Theme persistence through `localStorage`.
- Dark-mode styling through Tailwind CSS variants.

## Internationalization

The application supports:

- English (`en-US`) as the source locale.
- Spanish (`es`) as an additional locale.

Angular's official localization mechanism is used through `@angular/localize`.

Translation files are stored in:

```text
src/locale/messages.xlf
src/locale/messages.es.xlf
```

The deployed localized versions are available at:

```text
English:
https://carloschg73.github.io/personal-workspace/

Spanish:
https://carloschg73.github.io/personal-workspace/es/
```

The language selector navigates between both localized versions.

## Testing

The project includes component tests for the main functional areas and relevant component behavior.

The current automated test suite contains:

- 9 test files.
- 15 tests.
- 15 passing tests.

The tests include coverage for relevant interactions such as:

- Mobile navigation.
- Theme switching and persistence.
- English and Spanish language-selection behavior.
- Project repository-link behavior.
- Component creation and relevant component behavior.

Run the test suite once with:

```bash
npm test -- --no-watch
```

Tests are added when they provide meaningful confidence in the application rather than only to increase a coverage number.

## Continuous Integration

GitHub Actions automatically validates changes pushed to the `main` branch and pull requests targeting `main`.

The CI workflow performs:

1. Repository checkout.
2. Node.js environment setup.
3. Dependency installation with `npm ci`.
4. Automated tests.
5. Localized production build.

The workflow is defined in:

```text
.github/workflows/ci.yml
```

## Deployment

The application is automatically deployed to GitHub Pages through GitHub Actions.

The deployment workflow:

1. Checks out the repository.
2. Configures Node.js.
3. Installs dependencies with `npm ci`.
4. Runs the automated test suite.
5. Builds the localized Angular application for the GitHub Pages repository base path.
6. Configures GitHub Pages.
7. Uploads the generated browser application as a GitHub Pages artifact.
8. Deploys the artifact to GitHub Pages.

Deployment only proceeds after the validation and build job completes successfully.

The localized deployment build uses:

```bash
npm run build -- --localize --base-href /personal-workspace/
```

The workflow publishes:

```text
dist/personal-workspace/browser
```

The workflow is defined in:

```text
.github/workflows/deploy.yml
```

The deployed application is available at:

https://carloschg73.github.io/personal-workspace/

## Run Locally

The project has been developed and validated with:

- Node.js 24.
- npm 11.

Clone the repository:

```bash
git clone https://github.com/CarlosChG73/personal-workspace.git
```

Enter the project directory:

```bash
cd personal-workspace
```

Install dependencies:

```bash
npm ci
```

Start the default development server:

```bash
npm start
```

Open:

```text
http://localhost:4200
```

The default development server uses the English source locale.

To serve the Spanish development variant:

```bash
ng serve --configuration=es
```

Angular's development server serves one localized variant at a time.

## Production Build

Generate the default production build with:

```bash
npm run build
```

Generate all configured localized production variants with:

```bash
npm run build -- --localize
```

The generated browser application is stored under:

```text
dist/personal-workspace/browser
```

## Project Structure

The main application structure is organized by functional area:

```text
src/
|-- app/
|   |-- back-to-top/
|   |-- contact/
|   |-- footer/
|   |-- header/
|   |-- hero/
|   |-- projects/
|   |   `-- project-card/
|   |-- skills/
|   |-- app.config.ts
|   |-- app.html
|   |-- app.spec.ts
|   `-- app.ts
|-- locale/
|   |-- messages.xlf
|   `-- messages.es.xlf
|-- index.html
|-- main.ts
`-- styles.css
```

Public assets include the professional profile image, favicon variants, and web app manifest.

Technical documentation is stored separately:

```text
docs/
|-- architecture.md
`-- adr/
    |-- ADR-001-angular.md
    |-- ADR-002-tailwind.md
    `-- ADR-003-deployment.md
```

Automation workflows are stored under:

```text
.github/workflows/
|-- ci.yml
`-- deploy.yml
```

## Technical Documentation

Additional technical documentation is available in:

- [`docs/architecture.md`](docs/architecture.md) — application architecture, responsive behavior, localization, theme behavior, testing strategy, and deployment architecture.
- [`docs/adr/ADR-001-angular.md`](docs/adr/ADR-001-angular.md) — decision to use Angular.
- [`docs/adr/ADR-002-tailwind.md`](docs/adr/ADR-002-tailwind.md) — decision to use Tailwind CSS.
- [`docs/adr/ADR-003-deployment.md`](docs/adr/ADR-003-deployment.md) — decision to deploy with GitHub Pages and GitHub Actions.

## Repository

Source code:

https://github.com/CarlosChG73/personal-workspace
