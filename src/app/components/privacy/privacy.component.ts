import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { TopNavbarComponent } from '../top-navbar/top-navbar.component';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [
    FooterComponent,
    TopNavbarComponent
  ],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.css'
})
export class PrivacyComponent {

}
