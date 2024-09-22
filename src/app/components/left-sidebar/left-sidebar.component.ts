import { Component } from '@angular/core';
import { InterestsComponent } from "../interests/interests.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button'; 
import { ModalLargeComponent } from "../modal-large/modal-large.component";
import { RouterLink } from '@angular/router';
import { CreatePostComponent } from "../create-post/create-post.component";

@Component({
  selector: 'app-left-sidebar',
  standalone: true,
  imports: [
    InterestsComponent,
    FormsModule,
    CommonModule,
    ButtonModule,
    ModalLargeComponent,
    RouterLink,
    CreatePostComponent
],
  templateUrl: './left-sidebar.component.html',
  styleUrl: './left-sidebar.component.css'
})
export class LeftSidebarComponent {

   interests = [
    'Backend',
    'Pentest',
    'Angular',
    'Docker',
    'Sql',
    'NodeJs',
    'NestJs'
  ]

  dataToCardProfile: { visible: boolean, position: string } = { visible: false, position: ''};   

  handleProfileCard(visible: boolean) {
    this.dataToCardProfile.position = 'bottom';
    this.dataToCardProfile.visible = visible;
  }

}
