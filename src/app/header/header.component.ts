import { Component, OnInit, Inject, PLATFORM_ID, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, AfterViewInit {
  isDarkMode = false;
  sections: HTMLElement[] = [];
  links: HTMLElement[] = [];
  observer: IntersectionObserver | null = null;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private renderer: Renderer2,
    private el: ElementRef
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const isDarkMode = localStorage.getItem('isDarkMode');
      if (isDarkMode) {
        this.isDarkMode = JSON.parse(isDarkMode);
        this.updateDarkModeClass();
        this.updateLogo();
      }

      this.sections = Array.from(document.querySelectorAll('section'));
      this.links = Array.from(this.el.nativeElement.querySelectorAll('nav a'));
    }
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.observer = new IntersectionObserver(this.onIntersection.bind(this), {
        threshold: 0.5
      });

      this.sections.forEach(section => {
        if (this.observer) {
          this.observer.observe(section);
        }
      });
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
    if (logo) {
      if (this.isDarkMode) {
        logo.src = "../../../assets/svg/logo-dark-md.svg";
      } else {
        logo.src = "../../../assets/svg/logo-light-md.svg";
      }
    }
  }

  onIntersection(entries: IntersectionObserverEntry[]) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const currentSection = entry.target as HTMLElement;
        this.links.forEach(link => {
          this.renderer.removeClass(link, 'text-amaranth');
          this.renderer.removeClass(link, 'font-bold');
          if (link.getAttribute('href') === `#${currentSection.id}`) {
            this.renderer.addClass(link, 'text-amaranth');
            this.renderer.addClass(link, 'font-bold');
          }
        });
      }
    });
  }
}