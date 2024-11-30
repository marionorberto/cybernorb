import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ConfirmPopupModule } from 'primeng/confirmpopup';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, ButtonModule, ToastModule, ConfirmPopupModule],
  providers: [ConfirmationService, MessageService],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent  {

  isBackgroundButtonFocused: boolean = false;
  palettePoints: string[]; 
  paletteColorsTitle: string[] ;
  bgColorDefault: string = 'bg-blue-800';
  bgColorChoosen: string = this.bgColorDefault;
  profileData: {
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    country: string;
    company: string;
    location: string;
    bio: string;
    mainJob: string;
    stack: string;
    remote: boolean;
    jobLocation: string;
  } = {
    firstname: 'Mário',
    lastname: 'Norberto',
    email: 'marionorberto2018@gmail.com',
    phone: '+244 935-327-990',
    country: 'Angola',
    company: '---',
    location: 'Luanda, Angola',
    bio: 'Building softwares, system inovations, implemeting system automatization.',
    mainJob: 'Fullstack Developer',
    stack: 'Junior',
    remote: true,
    jobLocation: 'Luanda, Mainga'    
  }

  constructor() {
    this.palettePoints = ['200', '300', '400', '500', '600', '700', '800', '900'];
    this.paletteColorsTitle =  ['slate'];
  }

  onChangeBackgroundColorOnClick(): void {
    this.isBackgroundButtonFocused = !this.isBackgroundButtonFocused;
  }

  onChooseBgColor(colorName: string, pointColor: string): void {
    this.bgColorChoosen = `bg-${colorName}-${pointColor}`;
  }

  onResetBgColor() {
    this.bgColorChoosen = this.bgColorDefault;
  }

  onHideChooseBgColor() {
    this.isBackgroundButtonFocused = false;
  }
}
