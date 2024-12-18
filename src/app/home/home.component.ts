import { NgFor, NgIf } from '@angular/common';
import { Component,  } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TranslateModule, NgIf, NgFor, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private translate: TranslateService) {
    const savedLanguage = localStorage.getItem('language') || 'en';
    this.translate.setDefaultLang(savedLanguage);
    this.translate.use(savedLanguage);
  }
  private visibleAnswer: number | null = null;

  toggleAnswer(id: number) {
    if (this.visibleAnswer === id) {
      this.visibleAnswer = null;
    } else {
      this.visibleAnswer = id;
    }
  }

  isAnswerVisible(id: number): boolean {
    return this.visibleAnswer === id;
  }
}
