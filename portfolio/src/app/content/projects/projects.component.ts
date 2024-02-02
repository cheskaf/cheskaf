import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROJECTS } from './projects';
import { SKILLS } from '../skills/skills';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = PROJECTS;
  skills = SKILLS;
}
