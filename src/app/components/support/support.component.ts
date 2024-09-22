import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { TopNavbarComponent } from "../top-navbar/top-navbar.component";

@Component({
  selector: 'app-support',
  standalone: true,
  imports: [FooterComponent, TopNavbarComponent],
  templateUrl: './support.component.html',
  styleUrl: './support.component.css'
})
export class SupportComponent {

}
