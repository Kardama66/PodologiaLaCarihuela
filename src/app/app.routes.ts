import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LogopediaComponent } from './logopedia/logopedia.component';
import { NursingComponent } from './nursing/nursing.component';
import { PhysiotherapyComponent } from './physiotherapy/physiotherapy.component';
import { PodologyComponent } from './podology/podology.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ServicesComponent } from './services/services.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'services/podology', component: PodologyComponent },
  { path: 'services/logopedia', component: LogopediaComponent },
  { path: 'services/nursing', component: NursingComponent },
  { path: 'services/physiotherapy', component: PhysiotherapyComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'reviews', component: ReviewsComponent },
  { path: 'team', component: TeamComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
export class AppRoutingModule {}
