import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-project-card',
  styleUrl: './project-card.css',
  templateUrl: './project-card.html',
})
export class ProjectCard {
  // Project information provided by the parent section.
  title = input.required<string>();
  description = input.required<string>();
  technologies = input.required<string>();

  // Public project links are displayed only when available.
  repositoryUrl = input<string>();
  demoUrl = input<string>();
}
