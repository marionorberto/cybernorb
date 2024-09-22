import { Component } from '@angular/core';
import { TopNavbarComponent } from "../top-navbar/top-navbar.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-activities',
  standalone: true,
  imports: [TopNavbarComponent, FooterComponent],
  templateUrl: './activities.component.html',
  styleUrl: './activities.component.css'
})
export class ActivitiesComponent {

}
