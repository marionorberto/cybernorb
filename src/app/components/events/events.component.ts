import { Component } from '@angular/core';
import { TopNavbarComponent } from '../top-navbar/top-navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { EventScheduleComponent } from "../event-schedule/event-schedule.component";
@Component({
  selector: 'app-events',
  standalone: true,
  imports: [
    TopNavbarComponent,
    FooterComponent,
    EventScheduleComponent
],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {
  filterEventList: string[] = ['upcoming', 'pending', 'past']
  eventFilterChosen: string = this.filterEventList[0];

  filterEvents(eventFilterChosen: string) : void | string {
    const eventNameExists: string | undefined =  this.filterEventList.find( eventName => eventFilterChosen == eventName);

    if (eventNameExists) return this.eventFilterChosen = eventNameExists;

    return this.eventFilterChosen = this.filterEventList[0];
  }
}
