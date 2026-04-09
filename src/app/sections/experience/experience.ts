import { Component } from '@angular/core';
import { EXPERIENCE, ExperienceItem } from '../../shared/portfolio.data';
import { SiteSettingsService } from '../../shared/site-settings.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-experience',
  imports: [TranslateModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class Experience {
  constructor(public readonly settings: SiteSettingsService) {}

  protected readonly experience: ExperienceItem[] = EXPERIENCE;
}
