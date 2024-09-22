import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';

import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ModalLargeComponent } from "../modal-large/modal-large.component";
import { ProfileComponent } from "../profile/profile.component";
import { CreatePostComponent } from "../create-post/create-post.component";

@Component({
  selector: 'app-top-navbar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    CommonModule,
    MenubarModule,
    ButtonModule,
    DialogModule,
    ModalLargeComponent,
    ProfileComponent,
    CreatePostComponent
],
  templateUrl: './top-navbar.component.html',
  styleUrl: './top-navbar.component.css'
})
export class TopNavbarComponent {
  showCardProfile: boolean = false;

  dataToCardProfile: { visible: boolean, position: string } = { visible: false, position: ''};   

  items: any[] =  [];
  
  ngOnInit() {
     this.items = [
  {
    label: 'Resources',
    items: [
        {
          label: 'Events',
          route: '/events'
        },
        {
          label: 'Usage',
          route: '/usage'
        },
        {
          label: 'Support',
          route: '/support'
        }
    ]
  }];

  }
 
  onClick() {
    this.showCardProfile = !this.showCardProfile;
  }

  handleProfileCard(visible: boolean) {
    this.dataToCardProfile.position = 'bottom';
    this.dataToCardProfile.visible = visible;
  }

   handleCreatePost(visible: boolean) {
    this.dataToCardProfile.position = 'bottom';
    this.dataToCardProfile.visible = visible;
  }


}
