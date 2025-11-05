import { Routes } from '@angular/router';
import { HomeComponent } from './user/home';
import { AboutComponent } from './user/about';
import { ServiceComponent } from './user/service';

export const routes: Routes = [
     { path: '', component: HomeComponent },
     { path: 'about', component: AboutComponent },
     { path: 'service', component: ServiceComponent },
];
