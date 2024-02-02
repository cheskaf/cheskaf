import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from '../content/content.component';
import { FooterComponent } from './footer/footer.component';
import { ScrolltotopComponent } from './scrolltotop/scrolltotop.component';

@Component({
  selector: 'app-general',
  standalone: true,
  imports: [HeaderComponent, ContentComponent, FooterComponent, ScrolltotopComponent],
  templateUrl: './general.component.html',
  styleUrl: './general.component.css'
})
export class GeneralComponent {

}
