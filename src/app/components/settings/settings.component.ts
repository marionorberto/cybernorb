import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { TopNavbarComponent } from "../top-navbar/top-navbar.component";

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [FooterComponent, TopNavbarComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {

}
