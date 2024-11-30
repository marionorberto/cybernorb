import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

import { ModalLargeComponent } from "../modal-large/modal-large.component";
import { ProfileComponent } from "../profile/profile.component";

enum EnumLayoutMode  {
  'DARK' = 'dark',
  'LIGHT' = 'light',
}
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
],
  templateUrl: './top-navbar.component.html',
  styleUrl: './top-navbar.component.css'
})
export class TopNavbarComponent {
  showCardProfile: boolean = false;
  dataToCardProfile: { 
    visible: boolean,
    position: string
  } = { 
    visible: false,
    position: ''
  };   
  items: any[] =  [];
  layoutMode: EnumLayoutMode = EnumLayoutMode.LIGHT;
  
  ngOnInit() {
     this.items = [
  {
    label: 'Resources',
    items: [
        {
          label: 'Events',
          route: '/cybernorb/events'
        },
        {
          label: 'Usage',
          route: '/cybernorb/usage'
        },
        {
          label: 'Support',
          route: '/cybernorb/support'
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

  onChangeLayoutModeToDark() {
    this.layoutMode =  EnumLayoutMode.DARK;
  }

  onChangeLayoutModeToLight() {
    this.layoutMode =  EnumLayoutMode.LIGHT;
  }
}
