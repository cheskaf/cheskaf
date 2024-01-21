import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import { Routes } from '@angular/router';
import { HeaderComponent } from './app/general/header/header.component';
import { AboutComponent } from './app/content/about/about.component';
import { ProjectsComponent } from './app/content/projects/projects.component';  
import { ContactComponent } from './app/content/contact/contact.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

  const routes: Routes = [
    { path: '', component: AboutComponent },
    { path: 'about', component: AboutComponent},
    { path: 'projects', component: ProjectsComponent },
    { path: 'contact', component: ContactComponent },
  ];