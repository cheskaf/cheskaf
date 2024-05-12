import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { SkillsComponent } from './landing/skills/skills.component';
import { AllProjectsComponent } from './all-projects/all-projects.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    { path: '', title: 'Cheska Francisco', component: LandingComponent },
    { path: '#skills', title: 'Skills', component: SkillsComponent},
    { path: 'projects', title: 'My Projects', component: AllProjectsComponent},
    { path: 'login', title: 'Admin Login', component: LoginComponent },   
    { path: 'admin', title: 'Portfolio Admin', component: AdminComponent },    
    { path: '**', title: 'Page Not Found', component: NotFoundComponent },
];
