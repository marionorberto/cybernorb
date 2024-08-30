import { Component } from '@angular/core';
import { CardMostReadComponent } from "../card-most-read/card-most-read.component";

@Component({
  selector: 'app-right-sidebar',
  standalone: true,
  imports: [CardMostReadComponent],
  templateUrl: './right-sidebar.component.html',
  styleUrl: './right-sidebar.component.css'
})
export class RightSidebarComponent {

}
