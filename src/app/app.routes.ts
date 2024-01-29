import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';


export const routes: Routes = [
  { path: '', title: 'Home', component: HomeComponent },
	{ path: 'about', title: 'About', component: AboutComponent },
];
