import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import { provideRouter, Routes } from '@angular/router';
import { LandingComponent } from './app/landing/landing.component';
import { SkillsComponent } from './app/landing/skills/skills.component';
import { AllProjectsComponent } from './app/all-projects/all-projects.component';
import { LoginComponent } from './app/login/login.component';
import { AdminComponent } from './app/admin/admin.component';
import { NotFoundComponent } from './app/not-found/not-found.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

  const routes: Routes = [
    { path: '', title: 'Cheska Francisco', component: LandingComponent },
    { path: '#skills', title: 'Skills', component: SkillsComponent},
    { path: 'projects', title: 'My Projects', component: AllProjectsComponent},
    { path: 'login', title: 'Admin Login', component: LoginComponent },   
    { path: 'admin', title: 'Portfolio Admin', component: AdminComponent },    
    { path: '**', title: 'Page Not Found', component: NotFoundComponent },
  ];
  
  bootstrapApplication(AppComponent, {
    providers: [provideRouter(routes)],
  });