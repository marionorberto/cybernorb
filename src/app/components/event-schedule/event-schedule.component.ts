import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-event-schedule',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
  ],
  templateUrl: './event-schedule.component.html',
  styleUrl: './event-schedule.component.css'
})
export class EventScheduleComponent {
  showSettingsEvent: boolean = false;

  scheduleData = [
    {
      id: 'ewlal223',
      title: '',
      location,
      speakers: [
        {
          img: `https://randomuser.me/api/portraits/thumb/men/${Math.floor(Math.random()*100)}.jpg`,
          name: 'Vicente Ngonga',
        },
        {
          img: `https://randomuser.me/api/portraits/thumb/men/${Math.floor(Math.random()*100)}.jpg`,
          name: 'Oliver Nui',
        }
    ]
    }
  ]

  handleShowSettingEvent() {
    this.showSettingsEvent = !this.showSettingsEvent;
  }

}
