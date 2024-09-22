import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent  {

  isBackgroundButtonFocused: boolean = false;

  palettePoints: string[]; 
  paletteColorsTitle: string[] ;
  colors: any;
//, 'sky', 'orange', 'pink' , 'Violet', 'Ember', 'Yellow', 'Gray', 'Neutral', 'Red', 'Zinc', 'Green', 'Emerald'

  constructor() {
    this.palettePoints = ['200', '300', '400', '500', '600', '700', '800', '900'];
    this.paletteColorsTitle =  ['slate', 'blue','cyan'];
  }

  handleChangeBackgroundColorOnFocus() {
    this.isBackgroundButtonFocused = true;
  }
  handleChangeBackgroundColorOnBlur() {
    this.isBackgroundButtonFocused = true;
  }


  handle () {

  }

}
