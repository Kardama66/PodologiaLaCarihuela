import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-logopedia',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './logopedia.component.html',
  styleUrl: './logopedia.component.css',
})
export class LogopediaComponent {
  constructor(private translate: TranslateService) {
    const savedLanguage = localStorage.getItem('language') || 'en';
    this.translate.setDefaultLang(savedLanguage);
    this.translate.use(savedLanguage);
  }
}
