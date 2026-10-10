# ADR-003: Deploy with GitHub Pages and GitHub Actions

## Status

Accepted

## Context

PersonalWorkspace is currently a static frontend application built with Angular.

The project requires a public deployment that is easy to access, reproducible, and consistent with the existing GitHub repository and CI/CD workflow.

The deployment solution should avoid introducing backend infrastructure because the current application does not require a server-side runtime, database, or authentication.

The application also supports localized builds, so the deployment process must publish both the English and Spanish variants with the correct repository base path.

## Alternatives Considered

- GitHub Pages with GitHub Actions
- External static hosting providers
- Custom server or cloud application hosting

## Decision

Use GitHub Pages as the hosting platform and GitHub Actions as the automated deployment mechanism.

## Rationale

GitHub Pages is appropriate for the current application because:

- PersonalWorkspace is a static frontend application.
- The source code is already hosted on GitHub.
- No backend runtime is required.
- The deployment can remain close to the repository and development workflow.
- GitHub Actions can build and publish the application automatically.
- The generated Angular browser output can be deployed directly as a static artifact.

The deployment build uses Angular localization and the repository base path:

```bash
ng build --localize --base-href /personal-workspace/
```

This produces the localized application structure required by the current deployment:

```text
/personal-workspace/      -> English
/personal-workspace/es/   -> Spanish
```

The deployment workflow publishes:

```text
dist/personal-workspace/browser
```

through the official GitHub Pages Actions workflow.

## Consequences

Positive:

- The application is publicly accessible without additional server infrastructure.
- Deployment is automated from the repository.
- The process is reproducible through version-controlled GitHub Actions workflows.
- Localized builds are published together.
- Hosting complexity remains proportional to the current project scope.
- Deployment configuration remains visible and reviewable as code.

Trade-offs:

- The deployment is designed for a static frontend and would need to change if a backend runtime becomes necessary.
- The repository base path must be handled correctly during the Angular build.
- GitHub Pages deployment depends on GitHub's hosting and Actions infrastructure.
- More advanced hosting requirements could justify moving to a different platform in the future.
