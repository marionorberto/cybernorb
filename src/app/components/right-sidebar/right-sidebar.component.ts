import { Component } from '@angular/core';
import { CardMostReadComponent } from "../card-most-read/card-most-read.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-right-sidebar',
  standalone: true,
  imports: [
    CardMostReadComponent,
    RouterLink,
  ],
  templateUrl: './right-sidebar.component.html',
  styleUrl: './right-sidebar.component.css'
})
export class RightSidebarComponent {

}
