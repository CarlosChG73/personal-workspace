import { Component, HostListener } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-back-to-top',
  styleUrl: './back-to-top.css',
  templateUrl: './back-to-top.html',
})
export class BackToTop {
  isVisible = false;

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isVisible = window.scrollY > 400;
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
