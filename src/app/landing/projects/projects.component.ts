import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PROJECTS } from '../../../projects';
import { SKILLS } from '../../../skills';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = PROJECTS;
  skills = SKILLS;
}
