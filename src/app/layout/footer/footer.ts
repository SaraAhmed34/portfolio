import { Component } from '@angular/core';
import { SiteSettingsService } from '../../shared/site-settings.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  imports: [TranslateModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  constructor(public readonly settings: SiteSettingsService) {}

  protected readonly year = new Date().getFullYear();
}
