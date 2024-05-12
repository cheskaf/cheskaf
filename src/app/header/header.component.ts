import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  isDarkMode = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const isDarkMode = localStorage.getItem('isDarkMode');
      if (isDarkMode) {
        this.isDarkMode = JSON.parse(isDarkMode);
        this.updateDarkModeClass();
        this.updateLogo();
      }
    }
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('isDarkMode', JSON.stringify(this.isDarkMode));
    }
    this.updateDarkModeClass();
    this.updateLogo();
  }

  updateDarkModeClass() {    
    const aboutSection = document.getElementById('about');
    const projectSection = document.getElementById('projects');
    const contactSection = document.getElementById('contact');
    
    if (this.isDarkMode) {
      document.documentElement.classList.add('dark');
      // remove light mode classes from sections
      if (aboutSection) {
        aboutSection.classList.remove('grid-bg');
        aboutSection.classList.add('grid-bg-dark');
      }
      if (projectSection) {
        projectSection.classList.remove('dotted-bg');
        projectSection.classList.add('dotted-bg-dark');
      }
      if (contactSection) {
        contactSection.classList.remove('grid-bg');
        contactSection.classList.add('grid-bg-dark');
      }
    } else {
      document.documentElement.classList.remove('dark');
      // add light mode classes to sections
      if (aboutSection) {
        aboutSection.classList.remove('grid-bg-dark');
        aboutSection.classList.add('grid-bg');
      }
      if (projectSection) {
        projectSection.classList.remove('dotted-bg-dark');
        projectSection.classList.add('dotted-bg');
      }
      if (contactSection) {
        contactSection.classList.remove('grid-bg-dark');
        contactSection.classList.add('grid-bg');
      }
    }
  }
  
  updateLogo() {
    const logo = document.getElementById('about-logo') as HTMLImageElement;
    if (this.isDarkMode) {
      logo.src = "../../../assets/svg/logo-dark-md.svg";
    } else {
      logo.src = "../../../assets/svg/logo-light-md.svg";
    }
  }
}
