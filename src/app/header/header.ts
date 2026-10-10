import { Component, inject, LOCALE_ID } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  // Angular provides the locale used to build the current application variant.
  private readonly locale = inject(LOCALE_ID);

  isMenuOpen = false;
  isDarkMode = document.documentElement.classList.contains('dark');

  // Identifies whether the current localized build is Spanish.
  get isSpanish(): boolean {
    return this.locale.startsWith('es');
  }

  // Displays the language currently active in the interface.
  get languageLabel(): string {
    return this.isSpanish ? 'ES' : 'EN';
  }

  // Navigates to the alternate localized build.
  get languageUrl(): string {
    return this.isSpanish ? '../' : 'es/';
  }

  // Provides an accessible description of the language change action.
  get languageAriaLabel(): string {
    return this.isSpanish
      ? $localize`Switch to English`
      : $localize`Switch to Spanish`;
  }

  // Keeps the theme control understandable for assistive technologies.
  get themeAriaLabel(): string {
    return this.isDarkMode
      ? $localize`Switch to light mode`
      : $localize`Switch to dark mode`;
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  // Updates both the document theme and the persisted user preference.
  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;

    document.documentElement.classList.toggle('dark', this.isDarkMode);
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
  }
}
