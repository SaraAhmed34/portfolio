import { Component } from '@angular/core';
import { SKILLS } from '../../shared/portfolio.data';
import { SiteSettingsService } from '../../shared/site-settings.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  imports: [TranslateModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills {
  constructor(public readonly settings: SiteSettingsService) {}

  protected readonly skills = SKILLS;
}
