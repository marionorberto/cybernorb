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
  filterSettingsOptions: string[] = ['account', 'profile', 'notifications', 'apperance', 'security', 'integrations']
  filterSettingsChosen: string = this.filterSettingsOptions[0];

  filterEvents(eventFilterChosen: string) : void | string {
    const eventNameExists: string | undefined =  this.filterSettingsOptions.find( eventName => eventFilterChosen == eventName);

    if (eventNameExists) return this.filterSettingsChosen = eventNameExists;

    return this.filterSettingsChosen = this.filterSettingsChosen[0];
  }
}
