import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card-community-posts',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
  ],
  templateUrl: './card-community-posts.component.html',
  styleUrl: './card-community-posts.component.css'
})
export class CardCommunityPostsComponent {

  @Input() cardData!:  any;

  dataToCardProfile: { visible: boolean, position: string } = { visible: false, position: '' };
   likesNumber: number = 24;
   like: boolean = false;
   saved: boolean = false;
   follow: boolean = false;
   isInputFocused: boolean = false;

   putLike() {
    this.like = !this.like;

    if (this.like) this.likesNumber++;
    
    if (!this.like) this.likesNumber--;
  }

  savePosts() {
    this.saved = !this.saved;
  }

  followPost() {
    this.follow = !this.follow;
  }

  onInputCommentFocus() {
    this.isInputFocused = true;
  }
  onInputCommentBlur() {
    this.isInputFocused = false;
  }

  onShowCardDialog(visible: boolean) {
      this.dataToCardProfile.position = 'bottom';
      this.dataToCardProfile.visible = visible;
   }
}
