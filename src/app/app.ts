import { Component } from '@angular/core';

import { BackToTop } from './back-to-top/back-to-top';
import { Contact } from './contact/contact';
import { Footer } from './footer/footer';
import { Header } from './header/header';
import { Hero } from './hero/hero';
import { Projects } from './projects/projects';
import { Skills } from './skills/skills';

@Component({
  selector: 'app-root',

  // Standalone components used to compose the main page.
  imports: [
    Header,
    Hero,
    Skills,
    Projects,
    Contact,
    Footer,
    BackToTop,
  ],

  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
