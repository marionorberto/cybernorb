import { Component, Input } from '@angular/core';
import { InterestsComponent } from "../interests/interests.component";

@Component({
  selector: 'app-left-sidebar',
  standalone: true,
  imports: [InterestsComponent],
  templateUrl: './left-sidebar.component.html',
  styleUrl: './left-sidebar.component.css'
})
export class LeftSidebarComponent {

  receive(e: any) {
    console.log(e);
  }

}
