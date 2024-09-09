import { Component } from '@angular/core';
import { TopNavbarComponent } from "../top-navbar/top-navbar.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [TopNavbarComponent, FooterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
