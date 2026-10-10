import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LOCALE_ID } from '@angular/core';

import { Header } from './header';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    // Each test starts without a persisted theme state.
    document.documentElement.classList.remove('dark');
    localStorage.removeItem('theme');

    await TestBed.configureTestingModule({
      imports: [Header],
    }).compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    document.documentElement.classList.remove('dark');
    localStorage.removeItem('theme');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open and close the mobile navigation', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const toggleButton = compiled.querySelector(
      'button[aria-controls="mobile-navigation"]'
    ) as HTMLButtonElement;

    expect(toggleButton.getAttribute('aria-expanded')).toBe('false');
    expect(compiled.querySelector('#mobile-navigation')).toBeNull();

    toggleButton.click();
    fixture.detectChanges();

    expect(toggleButton.getAttribute('aria-expanded')).toBe('true');
    expect(compiled.querySelector('#mobile-navigation')).not.toBeNull();

    const skillsLink = compiled.querySelector(
      '#mobile-navigation a[href="#skills"]'
    ) as HTMLAnchorElement;

    skillsLink.click();
    fixture.detectChanges();

    expect(toggleButton.getAttribute('aria-expanded')).toBe('false');
    expect(compiled.querySelector('#mobile-navigation')).toBeNull();
  });

  it('should toggle and persist the selected theme', () => {
    expect(component.isDarkMode).toBe(false);

    component.toggleTheme();

    expect(component.isDarkMode).toBe(true);
    expect(document.documentElement.classList.contains('dark')).toBe(true);
    expect(localStorage.getItem('theme')).toBe('dark');

    component.toggleTheme();

    expect(component.isDarkMode).toBe(false);
    expect(document.documentElement.classList.contains('dark')).toBe(false);
    expect(localStorage.getItem('theme')).toBe('light');
  });

  it('should display EN and provide the Spanish locale link from the English version', () => {
    expect(component.isSpanish).toBe(false);
    expect(component.languageLabel).toBe('EN');
    expect(component.languageUrl).toBe('es/');
  });
});

describe('Header Spanish locale', () => {
  let component: Header;

  beforeEach(async () => {
    // Overrides Angular's locale to validate the Spanish build behavior.
    await TestBed.configureTestingModule({
      imports: [Header],
      providers: [
        {
          provide: LOCALE_ID,
          useValue: 'es',
        },
      ],
    }).compileComponents();

    const fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display ES and provide the English locale link from the Spanish version', () => {
    expect(component.isSpanish).toBe(true);
    expect(component.languageLabel).toBe('ES');
    expect(component.languageUrl).toBe('../');
  });
});
