import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TopNavbarComponent } from "../top-navbar/top-navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { ModalLargeComponent } from "../modal-large/modal-large.component";

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ThreeDotsSettingsComponent } from "../three-dots-settings/three-dots-settings.component";
import { RowNotificatiosComponent } from "../row-notificatios/row-notificatios.component";

interface dataInterface {
  id: number;
  name: string;
  email: string;
  subject: string;
  content: string;
  date: string;
  image: string;
}
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
  dataToCardProfile: { 
    visible: boolean,
    position: string
  } = { visible: false, position: '' };
  inputValue: string = '';
  isFocused: boolean = false;
  indexArrays: number[] = [];
  isSingleNotificationShown: boolean = false;
  markAllAsRead: boolean = false;

  dataToInput: dataInterface[] = [
    {
      id: 1,
      name: 'Mário Norberto',
      email: 'marionorberto2018@gmail.com',
      subject: 'Google Settings',
      content: 'Dear Mário Norberto...',
      date: 'Oct 23, 2024',
      image: 'https://randomuser.me/api/portraits/thumb/men/63.jpg'
    },
    {
      id: 2,
      name: 'Vitali Meta',
      email: 'vitalimeta@hotmail.com',
      subject: 'Google Settings',
      content: 'Dear Mário Norberto..',
      date: 'Jul 22, 2024',
      image: 'https://randomuser.me/api/portraits/thumb/men/69.jpg'
    },
    {
      id: 3,
      name: 'Diego Fernandes',
      email: 'diego3g@gmail.com',
      subject: 'Google Settings',
      content: 'Dear Mário Norberto..',
      date: 'Jun 04, 2024',
      image: 'https://randomuser.me/api/portraits/thumb/men/62.jpg'
    },
    {
      id: 4,
      name: 'Mr Robot',
      email: 'mrobot@gmail.com',
      subject: 'Google Settings',
      content: 'Dear Mário Norberto..',
      date: 'Mar 30, 2024',
      image: 'https://randomuser.me/api/portraits/thumb/men/66.jpg'
    },
    {
      id: 5,
      name: 'Filipe Lukebana',
      email: 'luke3d@gmail.com',
      subject: 'Google Settings',
      content: 'Dear Mário Norberto',
      date: 'Jan 03, 2024',
      image: 'https://randomuser.me/api/portraits/thumb/men/83.jpg'
    },
    {
      id: 6,
      name: 'Gabriel Pato',
      email: 'patoacademy@gmail.com',
      subject: 'Google Settings',
      content: 'Dear Mário Norberto..',
      date: 'Jan 02, 2024',
      image: 'https://randomuser.me/api/portraits/thumb/men/76.jpg'
    }
  ];

  onSingleNotificationOption() {
    this.isSingleNotificationShown = !this.isSingleNotificationShown;
  }
 
  onCardDialog(visible: boolean) {
    this.dataToCardProfile.position = 'bottom';
    this.dataToCardProfile.visible = visible;
  }

  onInputSearchFocus() {
    this.isFocused = true;
  }

  onInputSearchBlur() {
    this.isFocused = false;
  }

  onMarkAllNotificationAsRead() {
    this.markAllAsRead = !this.markAllAsRead;
  }

}
