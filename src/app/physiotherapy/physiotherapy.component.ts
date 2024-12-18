import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-physiotherapy',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './physiotherapy.component.html',
  styleUrl: './physiotherapy.component.css'
})
export class PhysiotherapyComponent {
  constructor(private translate: TranslateService) {
    const savedLanguage = localStorage.getItem('language') || 'en';
    this.translate.setDefaultLang(savedLanguage);
    this.translate.use(savedLanguage);
  }
}
