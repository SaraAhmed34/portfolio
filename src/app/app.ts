import { Component, HostListener } from '@angular/core';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
import { CursorGlow } from './shared/cursor-glow/cursor-glow';
import { About } from './sections/about/about';
import { Skills } from './sections/skills/skills';
import { Experience } from './sections/experience/experience';
import { Projects } from './sections/projects/projects';
import { Contact } from './sections/contact/contact';
import { SiteSettingsService } from './shared/site-settings.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, CursorGlow, About, Skills, Experience, Projects, Contact, TranslateModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  showBackToTop = false;

  constructor(public readonly settings: SiteSettingsService) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showBackToTop = window.pageYOffset > 300;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
