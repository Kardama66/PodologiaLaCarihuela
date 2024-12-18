import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'], // Fixed typo: `styleUrl` to `styleUrls`
})
export class FooterComponent {
  actualyear = new Date().getFullYear();

  constructor(private translate: TranslateService) {
    const savedLanguage = localStorage.getItem('language') || 'en';
    this.translate.setDefaultLang(savedLanguage);
    this.translate.use(savedLanguage);
  }
}
