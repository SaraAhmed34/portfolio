import { Component } from '@angular/core';
import { PROJECTS } from '../../shared/portfolio.data';
import { SiteSettingsService } from '../../shared/site-settings.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  imports: [TranslateModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {
  constructor(public readonly settings: SiteSettingsService) {}

  protected readonly projects = PROJECTS;
}
