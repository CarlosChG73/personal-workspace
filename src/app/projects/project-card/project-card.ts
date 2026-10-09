import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-project-card',
  styleUrl: './project-card.css',
  templateUrl: './project-card.html',
})
export class ProjectCard {
  // Data received from the parent Projects component.
  title = input.required<string>();
  description = input.required<string>();
  technologies = input.required<string>();

  // Optional until a real repository exists.
  repositoryUrl = input<string>();
}
