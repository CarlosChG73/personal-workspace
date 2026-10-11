import { TestBed } from '@angular/core/testing';

import { ProjectCard } from './project-card';

describe('ProjectCard', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectCard],
    }).compileComponents();
  });

  it('should render project information and public links', () => {
    const fixture = TestBed.createComponent(ProjectCard);

    fixture.componentRef.setInput('title', 'Test Project');
    fixture.componentRef.setInput('description', 'Test project description.');
    fixture.componentRef.setInput('technologies', 'Angular · TypeScript');
    fixture.componentRef.setInput(
      'repositoryUrl',
      'https://github.com/example/test-project'
    );
    fixture.componentRef.setInput(
      'demoUrl',
      'https://example.com'
    );

    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const links = compiled.querySelectorAll('a');

    expect(compiled.querySelector('h3')?.textContent).toContain('Test Project');
    expect(compiled.textContent).toContain('Test project description.');
    expect(compiled.textContent).toContain('Angular · TypeScript');

    expect(links.length).toBe(2);
    expect(links[0].getAttribute('href')).toBe(
      'https://github.com/example/test-project'
    );
    expect(links[0].textContent).toContain('View source');
    expect(links[1].getAttribute('href')).toBe('https://example.com');
    expect(links[1].textContent).toContain('Live demo');
  });

  it('should not render project links when no public URLs are provided', () => {
    const fixture = TestBed.createComponent(ProjectCard);

    fixture.componentRef.setInput('title', 'Private Project');
    fixture.componentRef.setInput('description', 'Project without public links.');
    fixture.componentRef.setInput('technologies', 'Angular · TypeScript');

    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelectorAll('a').length).toBe(0);
  });
});
