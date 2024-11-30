import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ModalLargeComponent } from "../modal-large/modal-large.component";
import { SinglePostComponent } from "../single-post/single-post.component";

@Component({
  selector: 'app-card-most-read',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DialogModule,
    ButtonModule,
    ModalLargeComponent,
    SinglePostComponent
],
  templateUrl: './card-most-read.component.html',
  styleUrl: './card-most-read.component.css'
})
export class CardMostReadComponent {

  @Input() mostReadData: any[] = [];
  dataToCardProfile: { 
    visible: boolean,
    position: string
  } = { visible: false, position: ''}

  onShowCardDialog() {
    this.dataToCardProfile.visible = true;
    this.dataToCardProfile.position = 'bottom';
  }

}
