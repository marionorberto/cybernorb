import { Component } from '@angular/core';
import { TopNavbarComponent } from "../top-navbar/top-navbar.component";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [TopNavbarComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

}
