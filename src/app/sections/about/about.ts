import { Component } from '@angular/core';
import { SiteSettingsService } from '../../shared/site-settings.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  imports: [TranslateModule],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {
  constructor(public readonly settings: SiteSettingsService) {}


}
