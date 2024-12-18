import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NgClass, NgIf } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [NgClass, RouterLink, RouterLinkActive, TranslateModule, NgIf],
})
export class HeaderComponent {
  constructor(private translate: TranslateService) {
    const savedLanguage = localStorage.getItem('language') || 'en';
    this.translate.setDefaultLang(savedLanguage);
    this.translate.use(savedLanguage);
  }

  switchLanguage(language: string) {
    this.translate.use(language);
    localStorage.setItem('language', language);
  }

  isMenuOpen = false;
  isLanguageMenuOpen = false; // Track language dropdown
  isServicesMenuOpen = false; // Track services dropdown

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleLanguageMenu() {
    this.isLanguageMenuOpen = !this.isLanguageMenuOpen;
  }

  toggleServicesMenu() {
    this.isServicesMenuOpen = !this.isServicesMenuOpen;
  }
}
