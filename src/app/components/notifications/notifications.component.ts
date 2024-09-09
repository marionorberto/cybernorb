import { Component } from '@angular/core';
import { TopNavbarComponent } from "../top-navbar/top-navbar.component";

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [TopNavbarComponent],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css'
})
export class NotificationsComponent {

}
