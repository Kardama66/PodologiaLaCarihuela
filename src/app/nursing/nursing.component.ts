import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nursing',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './nursing.component.html',
  styleUrl: './nursing.component.css',
})
export class NursingComponent {
  constructor(private translate: TranslateService) {
    const savedLanguage = localStorage.getItem('language') || 'en';
    this.translate.setDefaultLang(savedLanguage);
    this.translate.use(savedLanguage);
  }
}
