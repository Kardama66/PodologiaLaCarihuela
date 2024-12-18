import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-podology',
  standalone: true,
  imports: [TranslateModule, NgFor],
  templateUrl: './podology.component.html',
  styleUrl: './podology.component.css',
})
export class PodologyComponent {
  constructor(private translate: TranslateService) {
    const savedLanguage = localStorage.getItem('language') || 'en';
    this.translate.setDefaultLang(savedLanguage);
    this.translate.use(savedLanguage);
  }
}
