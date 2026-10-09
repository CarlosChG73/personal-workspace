import { TestBed } from '@angular/core/testing';

import { ProjectCard } from './project-card';

describe('ProjectCard', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectCard],
    }).compileComponents();
  });

  it('should render the project information', () => {
    const fixture = TestBed.createComponent(ProjectCard);

    // Required project data.
    fixture.componentRef.setInput('title', 'Test Project');
    fixture.componentRef.setInput('description', 'Test project description.');
    fixture.componentRef.setInput('technologies', 'Angular · TypeScript');

    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('h3')?.textContent).toContain('Test Project');
    expect(compiled.textContent).toContain('Test project description.');
    expect(compiled.textContent).toContain('Angular · TypeScript');
  });

  it('should show repository pending when no repository URL is provided', () => {
    const fixture = TestBed.createComponent(ProjectCard);

    // Required project data without an optional repository URL.
    fixture.componentRef.setInput('title', 'Future Project');
    fixture.componentRef.setInput('description', 'Project in development.');
    fixture.componentRef.setInput('technologies', 'Technology stack to be defined');

    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).toContain('Repository pending');
  });
});
