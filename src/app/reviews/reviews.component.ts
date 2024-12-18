import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-reviews',
  standalone: true,
  templateUrl: './reviews.component.html',
  styleUrls: [],
  imports: [TranslateModule],
})
export class ReviewsComponent {
  constructor(private translate: TranslateService) {
    const savedLanguage = localStorage.getItem('language') || 'en';
    this.translate.setDefaultLang(savedLanguage);
    this.translate.use(savedLanguage);
  }
}
