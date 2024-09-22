import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TopNavbarComponent } from "../top-navbar/top-navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { ModalLargeComponent } from "../modal-large/modal-large.component";

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [
    TopNavbarComponent,
    FooterComponent,
    FormsModule,
    CommonModule,
    TableModule,
    ModalLargeComponent,
    ButtonModule,
],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css'
})
export class NotificationsComponent {
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
