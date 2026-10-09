import { Component } from '@angular/core';

import { Header } from './header/header';
import { Hero } from './hero/hero';
import { Skills } from './skills/skills';
import { Projects } from './projects/projects';
import { Contact } from './contact/contact';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',

  // Standalone components used to compose the main page.
  imports: [
    Header,
    Hero,
    Skills,
    Projects,
    Contact,
    Footer
  ],

  // External files for the root component template and styles.
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
