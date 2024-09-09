import { Component } from '@angular/core';
import { AboutComponent } from "../about/about.component";
import { TopNavbarComponent } from "../top-navbar/top-navbar.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-community',
  standalone: true,
  imports: [
    AboutComponent,
    TopNavbarComponent,
    FooterComponent],
  templateUrl: './community.component.html',
  styleUrl: './community.component.css'
})
export class CommunityComponent {}
