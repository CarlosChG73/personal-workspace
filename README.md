# PersonalWorkspace

PersonalWorkspace is a professional personal platform for presenting software development skills, technical projects, and engineering decisions through practical development evidence.

## Problem

A traditional resume provides limited space to demonstrate how software is designed, implemented, tested, documented, and delivered.

PersonalWorkspace provides a central place to present technical evidence beyond a resume.

## Objective

Build a modern, responsive, and maintainable frontend application that demonstrates the correct use of current web development practices without positioning the project as a frontend specialization.

The project is intended to demonstrate the ability to develop and maintain the frontend layer when a software solution requires it.

## Live Demo

The application is publicly available through GitHub Pages:

https://carloschg73.github.io/personal-workspace/

## Current MVP

The current MVP includes:

- Professional introduction.
- Technical skills section.
- Projects section.
- Reusable project card component.
- Professional contact section.
- Responsive navigation.
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

### Development and Quality

- npm.
- Git.
- GitHub.
- Vitest.
- GitHub Actions.

## Architecture

The application follows a simple component-based frontend architecture organized around functional areas.

The main functional areas are:

- Header and navigation.
- Hero.
- Skills.
- Projects.
- Project card.
- Contact.
- Footer.

The root application component composes these functional areas into the main page.

Reusable components are introduced only when a concrete presentation or behavior requirement justifies them. The `ProjectCard` component currently represents the main reusable UI component.

The MVP remains frontend-only. Additional services, models, backend capabilities, or architectural abstractions will only be introduced when actual application requirements justify them.

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

## Testing

The project includes component tests for the main functional areas and relevant component behavior.

For the current MVP, the automated test suite contains:

- 8 test files.
- 10 tests.
- 10 passing tests.

Run the test suite once with:

```bash
npm test -- --no-watch
```

## Continuous Integration

GitHub Actions automatically validates changes pushed to the `main` branch and pull requests targeting `main`.

The CI workflow performs:

1. Repository checkout.
2. Node.js environment setup.
3. Dependency installation with `npm ci`.
4. Automated tests.
5. Production build.

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
4. Builds the Angular application for the GitHub Pages base path.
5. Uploads the generated browser application as a GitHub Pages artifact.
6. Deploys the artifact to GitHub Pages.

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

Start the development server:

```bash
npm start
```

Open:

```text
http://localhost:4200
```

## Production Build

Generate a production build with:

```bash
npm run build
```

The current Angular build configuration generates the browser application under:

```text
dist/personal-workspace/browser
```

## Project Structure

The main application structure is organized by functional area:

```text
src/app/
|-- contact/
|-- footer/
|-- header/
|-- hero/
|-- projects/
|   `-- project-card/
|-- skills/
|-- app.html
|-- app.spec.ts
`-- app.ts
```

Technical documentation is stored separately:

```text
docs/
|-- architecture.md
`-- adr/
```

Automation workflows are stored under:

```text
.github/workflows/
|-- ci.yml
`-- deploy.yml
```

## Technical Documentation

Additional technical documentation is available in:

- [`docs/architecture.md`](docs/architecture.md) — application architecture, information structure, responsive behavior, and component responsibilities.
- [`docs/adr/`](docs/adr/) — significant architectural decisions and their rationale.

## Repository

Source code:

https://github.com/CarlosChG73/personal-workspace
