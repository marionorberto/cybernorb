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
  mostReadCardContent = [
  {
    id: 1,
    tech: 'hacking',
    data: 'Mar 23, 2024',
    urlImg: 'img-most-read-1.jpg',
    content: 'New vunerabilities was detected on firefox...',
  },
  {
    id: 2,
    tech: 'javascript',
    data: 'Jan 04, 2024',
    urlImg: 'img-most-read-2.jpg',
    content: 'The best way of destructing an object...',
  },
  {
    id: 3,
    tech: 'Docker',
    data: 'Jun 30, 2024',
    urlImg: 'img-most-read-3.png',
    content: 'containerazation vs vm has impacted the way',
  },
  {
    id: 4,
    tech: 'kalilunux',
    data: 'Mar 28, 2024',
    urlImg: 'img-most-read-4.jpg',
    content: 'Every tools that all hackers are using in 2024',
  }
] 
}
