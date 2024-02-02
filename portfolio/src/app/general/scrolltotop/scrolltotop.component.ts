import { Component, HostListener, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scrolltotop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scrolltotop.component.html',
  styleUrl: './scrolltotop.component.css'
})
export class ScrolltotopComponent {
  isShow: boolean = false;
  topPosToStartShowing = 50;

  @HostListener('window:scroll')
  checkScroll() {
    // Both window.pageYOffset and document.documentElement.scrollTop returns the same result in all the cases. window.pageYOffset is not supported below IE 9.

    const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop || 0;

    console.log('[scroll]', scrollPosition);
    
    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }
  
  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }
}
