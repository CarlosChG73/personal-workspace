import { TestBed } from '@angular/core/testing';

import { ProjectCard } from './project-card';

describe('ProjectCard', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectCard],
    }).compileComponents();
  });

  it('should render the project information and repository link', () => {
    const fixture = TestBed.createComponent(ProjectCard);

    // Required project data.
    fixture.componentRef.setInput('title', 'Test Project');
    fixture.componentRef.setInput('description', 'Test project description.');
    fixture.componentRef.setInput('technologies', 'Angular · TypeScript');
    fixture.componentRef.setInput(
      'repositoryUrl',
      'https://github.com/example/test-project'
    );

    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const repositoryLink = compiled.querySelector('a');

    expect(compiled.querySelector('h3')?.textContent).toContain('Test Project');
    expect(compiled.textContent).toContain('Test project description.');
    expect(compiled.textContent).toContain('Angular · TypeScript');
    expect(repositoryLink?.getAttribute('href')).toBe(
      'https://github.com/example/test-project'
    );
    expect(repositoryLink?.textContent).toContain('View source');
  });

  it('should not render a repository link when no repository URL is provided', () => {
    const fixture = TestBed.createComponent(ProjectCard);

    // Repository URL remains optional for projects without public source code.
    fixture.componentRef.setInput('title', 'Private Project');
    fixture.componentRef.setInput('description', 'Project without public source code.');
    fixture.componentRef.setInput('technologies', 'Angular · TypeScript');

    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('a')).toBeNull();
  });
});
