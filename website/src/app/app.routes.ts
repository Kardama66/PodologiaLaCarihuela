import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { TeamComponent } from './team/team.component';
import { PodologyComponent } from './services/podology/podology.component';
import { NursingComponent } from './services/nursing/nursing.component';
import { PhysiotherapyComponent } from './services/physiotherapy/physiotherapy.component'; 
import { LogopediaComponent } from './services/logopedia/logopedia.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'team', component: TeamComponent },
    { path: 'services/podology', component: PodologyComponent },
    { path: 'services/nursing', component: NursingComponent },
    { path: 'services/physiotherapy', component: PhysiotherapyComponent },
    { path: 'services/logopedia', component: LogopediaComponent },
    // Redirect to home if no path matches
    { path: '**', redirectTo: '' }
  ];
