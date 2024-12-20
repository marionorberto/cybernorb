import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
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

  @Input() data: any = {};

  isInputFocused: boolean = false;
  likesNumber: number = 24;
  like: boolean = false;
  saved: boolean = false;
  follow: boolean = false;

  
  onInputCommentFocus() {
    this.isInputFocused = true;
  }

  onInputCommentBlur() {
    this.isInputFocused = false;
  }

  onPutLike() {
    this.like = !this.like;
    if (this.like) this.likesNumber++;
    if (!this.like) this.likesNumber--;
  }

  onSavePosts() {
    this.saved = !this.saved;
  }

  followPost() {
    this.follow = !this.follow;
  }
}
