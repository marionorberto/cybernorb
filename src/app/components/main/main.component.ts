import { Component, OnChanges } from '@angular/core';
import { LeftSidebarComponent } from "../left-sidebar/left-sidebar.component";
import { MiddleSidebarComponent } from "../middle-sidebar/middle-sidebar.component";
import { RightSidebarComponent } from "../right-sidebar/right-sidebar.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    LeftSidebarComponent,
    MiddleSidebarComponent,
    RightSidebarComponent,
    NavbarComponent,
    CommonModule,
    FormsModule
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  inputValue: string = '';
  isFocused: boolean = false;

  onInputFocus() {
    this.isFocused = true;
  }

  onInputBlur() {
    this.isFocused = false;
  }
}
