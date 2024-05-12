import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SKILLS, SKILLS_CATEGORIES } from '../../../skills';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills = SKILLS;
  categories = SKILLS_CATEGORIES;
}
