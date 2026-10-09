# Architecture

## Overview

PersonalWorkspace is a frontend web application built with Angular and TypeScript.

Its purpose is to provide a maintainable and responsive platform for presenting professional information, technical skills, and software projects.

## Architectural Goals

The application should be:

- Maintainable.
- Responsive.
- Easy to extend.
- Structured by clear responsibilities.
- Simple and proportional to the current MVP.

## Current Scope

The first MVP is a frontend-only application.

It will not include:

- Custom backend.
- Authentication.
- Database.
- Server-side rendering.

These capabilities will only be considered later if a real requirement justifies them.

## Application Organization

The application will be organized around functional areas.

Closely related Angular files will remain grouped together.

The initial functional areas are:

- Header and navigation.
- Professional introduction.
- Technical skills.
- Projects.
- Contact information.
- Footer.

Components will represent clear and cohesive parts of the user interface.

Reusable components will be used when the same presentation or behavior is needed in multiple places.

Data models, services, and other abstractions will be added only when required by actual application behavior.

## MVP Information Architecture

The initial interface will contain the following sections:

1. Header / Navigation
  - Project identity.
  - Navigation to the main sections.

2. Hero
  - Professional introduction.
  - Short description of the professional profile.
  - Primary call to action.

3. Skills
  - Main technical skills.
  - Technologies grouped by relevant areas.

4. Projects
  - Selected software projects.
  - Short description.
  - Technologies used.
  - Source code and live demo links when available.

5. Contact
  - Professional contact options.
  - Relevant professional profile links.

6. Footer
  - Basic project information.
  - Repository or professional links.

## Initial Wireframe

```text
[ Header / Navigation ]

[ Hero Section ]
[ Professional introduction ]
[ Primary action ]

[ Skills Section ]
[ Technical skills grouped by area ]

[ Projects Section ]
[ Project Card ]
[ Project Card ]
[ Project Card ]

[ Contact Section ]

[ Footer ]
```

## Responsive Behavior

The interface will follow a mobile-first approach.

- Sections will stack vertically on small screens.
- Navigation will adapt to available screen space.
- Project cards will use a single-column layout on small screens.
- Larger layouts may use multiple columns when available space allows.
- Responsive changes will be introduced only where the design requires them.

## Initial Angular Component Structure

The first MVP will use the following application components:

- `App`
  - Root application component.
  - Composes the main application interface.

- `Header`
  - Displays the project identity.
  - Provides navigation to the main sections.

- `Hero`
  - Displays the professional introduction.
  - Includes the primary call to action.

- `Skills`
  - Displays the main technical skills.
  - Groups technologies by relevant areas.

- `Projects`
  - Displays the selected software projects.
  - Coordinates the presentation of project information.

- `ProjectCard`
  - Represents an individual software project.
  - Displays the project description, technologies, source code link, and demo link when available.
  - Can be reused for multiple projects.

- `Contact`
  - Displays professional contact options and relevant profile links.

- `Footer`
  - Displays basic project and professional information.

## Component Responsibilities

Components should remain focused on the user interface and interactions related to their own functional area.

Logic that can exist independently of the interface should not remain inside presentation components.

Complex logic should not be placed directly in templates.

New abstractions, services, models, or reusable components will only be introduced when a concrete requirement justifies them.
