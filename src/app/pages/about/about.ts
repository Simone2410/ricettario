import { Component, inject } from '@angular/core';
import { I18nService } from '../../i18n/i18n.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
})
export class About {
  protected readonly i18n = inject(I18nService);
}
