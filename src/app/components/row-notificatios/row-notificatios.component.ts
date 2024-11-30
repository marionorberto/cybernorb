import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ThreeDotsSettingsComponent } from '../three-dots-settings/three-dots-settings.component';

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
  selector: 'app-row-notificatios',
  standalone: true,
  imports: [
    CommonModule,
    ThreeDotsSettingsComponent,
  ],
  templateUrl: './row-notificatios.component.html',
  styleUrl: './row-notificatios.component.css'
})
export class RowNotificatiosComponent {
  @Input() data!: dataInterface;
  isSingleNotificationShown: boolean = false;

  handleSingleNotificationOption() {
    this.isSingleNotificationShown = !this.isSingleNotificationShown;
  }
}
