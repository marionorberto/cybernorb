import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-most-read',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './card-most-read.component.html',
  styleUrl: './card-most-read.component.css'
})
export class CardMostReadComponent {

  @Input() mostReadData: any[] = [];

}
