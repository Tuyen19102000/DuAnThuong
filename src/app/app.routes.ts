import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ContentComponent } from './pages/content/content.component';
import { CapabilitiesComponent } from './pages/capabilities/capabilities.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'content', component: ContentComponent },
  { path: 'capabilities', component: CapabilitiesComponent },
  { path: 'about-us', component: AboutComponent },
  { path: 'contact-us', component: ContactComponent },
  { path: '**', redirectTo: '' }
];
