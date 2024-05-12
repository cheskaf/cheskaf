import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { PROJECTS } from '../../projects';
import { SKILLS } from '../../skills';

@Component({
  selector: 'app-all-projects',
  standalone: true,
  imports: [ CommonModule, HeaderComponent ],
  templateUrl: './all-projects.component.html',
  styleUrl: './all-projects.component.css'
})
export class AllProjectsComponent {
  projects = PROJECTS;
  skills = SKILLS;
}
