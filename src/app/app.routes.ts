import { Routes } from '@angular/router';
import { About } from './sections/about/about';
import { Skills } from './sections/skills/skills';
import { Experience } from './sections/experience/experience';
import { Projects } from './sections/projects/projects';
import { Contact } from './sections/contact/contact';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'about' },
  { path: 'about', component: About },
  { path: 'skills', component: Skills },
  { path: 'experience', component: Experience },
  { path: 'projects', component: Projects },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: 'about' }
];
