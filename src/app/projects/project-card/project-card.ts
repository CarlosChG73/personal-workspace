import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-project-card',
  styleUrl: './project-card.css',
  templateUrl: './project-card.html',
})
export class ProjectCard {
  // Project data provided by the parent section.
  title = input.required<string>();
  description = input.required<string>();
  technologies = input.required<string>();

  // Public source code is linked only when available.
  repositoryUrl = input<string>();
}
