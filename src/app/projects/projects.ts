import { Component } from '@angular/core';

import { ProjectCard } from './project-card/project-card';

@Component({
  imports: [ProjectCard],
  selector: 'app-projects',
  styleUrl: './projects.css',
  templateUrl: './projects.html',
})
export class Projects {}
