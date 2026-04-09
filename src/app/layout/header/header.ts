import { Component } from '@angular/core';
import { SiteSettingsService } from '../../shared/site-settings.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [TranslateModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  constructor(public readonly settings: SiteSettingsService) {}

  protected readonly links = [
    { id: 'home', labelKey: 'nav.home' },
    { id: 'about', labelKey: 'nav.about' },
    { id: 'skills', labelKey: 'nav.skills' },
    { id: 'experience', labelKey: 'nav.experience' },
    { id: 'projects', labelKey: 'nav.projects' },
    { id: 'contact', labelKey: 'nav.contact' }
  ];
}
