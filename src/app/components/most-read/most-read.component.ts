import { Component } from '@angular/core';
import { TopNavbarComponent } from "../top-navbar/top-navbar.component";

@Component({
  selector: 'app-most-read',
  standalone: true,
  imports: [TopNavbarComponent],
  templateUrl: './most-read.component.html',
  styleUrl: './most-read.component.css'
})
export class MostReadComponent {

}
