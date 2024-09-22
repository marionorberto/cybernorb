import { Component } from '@angular/core';
import { TopNavbarComponent } from '../top-navbar/top-navbar.component';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-events',
  standalone: true,
  imports: [
    TopNavbarComponent,
    FooterComponent,
],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {

}
