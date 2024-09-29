import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from '../footer/footer.component';
import { TopNavbarComponent } from '../top-navbar/top-navbar.component';
import { ModalLargeComponent } from '../modal-large/modal-large.component';

import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { CardPostComponent } from "../card-post/card-post.component";

@Component({
  selector: 'app-my-posts',
  standalone: true,
  imports: [
    FooterComponent,
    TopNavbarComponent,
    CommonModule,
    TableModule,
    DialogModule,
    ButtonModule,
    ModalLargeComponent,
    FormsModule,
    CardPostComponent
],
  templateUrl: './my-posts.component.html',
  styleUrl: './my-posts.component.css'
})
export class MyPostsComponent {

   dataToCardProfile: { visible: boolean, position: string } = { visible: false, position: '' };
   inputValue: string = '';
   isFocused: boolean = false;

    customers: any[] = [
    {
      name: 'Mário Norberto',
      email: 'marionorberto2018@gmail.com',
      subject: 'Google Settings',
      content: 'Dear Mário Norberto...',
      date: '27 oct, 2024',
      image: '../../../assets/images/me.jpg'
   },
   {
      name: 'Vitali Meta',
      email: 'vitalimeta@hotmail.com',
      subject: 'Google Settings',
      content: 'Dear Mário Norberto..',
      date: '23 jul, 2024',
      image: '../../../assets/images/me.jpg'
   },
   {
      name: 'Diego Fernandes',
      email: 'diego3g@gmail.com',
      subject: 'Google Settings',
      content: 'Dear Mário Norberto..',
      date: '29 jun, 2024',
      image: '../../../assets/images/me.jpg'
   }
   ,{
      name: 'Mr Robot',
      email: 'mrobot@gmail.com',
      subject: 'Google Settings',
      content: 'Dear Mário Norberto..',
      date: '30 mar, 2024',
      image: '../../../assets/images/me.jpg'
   }
   ,{
      name: 'Filipe Lukebana',
      email: 'luke3d@gmail.com',
      subject: 'Google Settings',
      content: 'Dear Mário Norberto..23 oct, 2024',
      date: '03 jan, 2024',
      image: '../../../assets/images/me.jpg'
   },
   {
      name: 'Gabriel Pato',
      email: 'patoacademy@gmail.com',
      subject: 'Google Settings',
      content: 'Dear Mário Norberto..',
      date: '02 jan, 2024',
      image: '../../../assets/images/me.jpg'
   }
  ]

  handleCardDialog(visible: boolean) {
    this.dataToCardProfile.position = 'bottom';
    this.dataToCardProfile.visible = visible;
  }

  onInputSearchFocus() {
    this.isFocused = true;
  }
  onInputSearchBlur() {
    this.isFocused = false;
  }
}
