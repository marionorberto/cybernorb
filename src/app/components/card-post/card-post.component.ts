import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card-post',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './card-post.component.html',
  styleUrl: './card-post.component.css'
})
export class CardPostComponent {

  isInputFocused: boolean = false;

  onInputCommentFocus() {
    this.isInputFocused = true;
  }
  onInputCommentBlur() {
    this.isInputFocused = false;
  }

}
