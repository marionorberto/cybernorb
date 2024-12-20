import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-section',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './post-section.component.html',
  styleUrl: './post-section.component.css'
})
export class PostSectionComponent {
  @Input() sectionId!: number;

  uploadMessage: string = '';
  contentTextLimit = 300;

  // verify if textarea content overflow the text limit:

  // remove post section


}
