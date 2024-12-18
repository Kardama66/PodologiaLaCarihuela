import { Component, OnInit, Inject } from '@angular/core';
import { RouterOutlet, NavigationEnd, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, TranslateModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Clinica De Podologia';

  constructor(
    private meta: Meta,
    private titleService: Title,
    private translate: TranslateService,
    private router: Router,
    @Inject(DOCUMENT) private document: Document
  ) {
    const savedLanguage = localStorage.getItem('language') || 'en';
    this.translate.setDefaultLang(savedLanguage);
    this.translate.use(savedLanguage);
    this.document.documentElement.lang = savedLanguage; // Set lang attribute
  }

  ngOnInit() {
    // Set the default title for the application
    this.titleService.setTitle(this.title);

    // Subscribe to language change
    this.translate.onLangChange.subscribe((event) => {
      this.updateMetaTags(event.lang);
      this.document.documentElement.lang = event.lang; // Update lang attribute
    });

    // Initial meta tags setup
    this.updateMetaTags(this.translate.currentLang);

    // Handle canonical URLs
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const link: HTMLLinkElement = this.document.createElement('link');
        link.setAttribute('rel', 'canonical');
        link.setAttribute('href', this.document.URL);
        this.document.head.appendChild(link);
      }
    });
  }

  private updateMetaTags(language: string): void {
    let description = '';

    switch (language) {
      case 'es':
        description =
          'Ofrecemos servicios excepcionales de podología, fisioterapia, enfermería y logopedia en Torremolinos, España.';
        break;
      case 'de':
        description =
          'Wir bieten außergewöhnliche Dienstleistungen in den Bereichen Podologie, Physiotherapie, Krankenpflege und Logopädie in Torremolinos, Spanien.';
        break;
      default:
        description =
          'Providing exceptional podology, physiotherapy, nursing, and logopedia services in Torremolinos, Spain.';
    }

    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'podology, clinic, healthcare, Torremolinos, foot care, physiotherapy, nursing, logopedia, speech therapy, health services, foot health, physical therapy, medical clinic, rehabilitation, wellness, pain management, therapy, injury recovery, Spanish clinic, podiatrist, nursing care, speech disorders, language therapy, medical professionals, holistic care, podología, clínica, salud, Torremolinos, cuidado de los pies, fisioterapia, enfermería, logopedia, terapia del habla, servicios de salud, salud podal, terapia física, clínica médica, rehabilitación, bienestar, manejo del dolor, terapia, recuperación de lesiones, clínica española, podólogo, cuidados de enfermería, trastornos del habla, terapia del lenguaje, profesionales médicos, cuidado holístico, Podologie, Klinik, Gesundheitswesen, Torremolinos, Fußpflege, Physiotherapie, Krankenpflege, Logopädie, Sprachtherapie, Gesundheitsdienste, Fußgesundheit, medizinische Klinik, Rehabilitation, Wellness, Schmerzmanagement, Therapie, Verletzungsgenesung, spanische Klinik, Podologe, Pflege, Sprachstörungen, Sprachtherapie, medizinische Fachkräfte, ganzheitliche Pflege, pain relief, holistic health, podiatry, orthopedics, diabetic foot care, preventative care, custom orthotics, sports injury, senior care, pediatric care, wound healing, balance therapy, ergonomic assessment, physiotherapy exercises, postpartum recovery, occupational therapy, healthcare professionals, mobility improvement, physical fitness, mental wellness, physiotherapy rehabilitation, Sprachentwicklung, Sprachpathologie, Logopädienäre, Pflegepersonal, gesundheitliche Vorsorge, podología deportiva, tratamiento integral, cuidados preventivos, fisioterapia deportiva, recuperación postoperatoria, logopedia infantil, terapia ocupacional, clínica integral, bienestar físico',
    });
    this.meta.updateTag({ name: 'author', content: 'Sebastian Dąbkowski' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    });
  }
}
