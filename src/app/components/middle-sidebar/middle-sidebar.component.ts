import { Component } from '@angular/core';
import { CardPostComponent } from "../card-post/card-post.component";

@Component({
  selector: 'app-middle-sidebar',
  standalone: true,
  imports: [CardPostComponent],
  templateUrl: './middle-sidebar.component.html',
  styleUrl: './middle-sidebar.component.css'
})
export class MiddleSidebarComponent {

}
