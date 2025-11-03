import { Routes } from '@angular/router';
import { HomeComponent } from './user/home';
import { AboutComponent } from './user/about';

export const routes: Routes = [
     { path: '', component: HomeComponent },
     { path: 'about', component: AboutComponent },
];
