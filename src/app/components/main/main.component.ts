import { Component } from '@angular/core';
import { LeftSidebarComponent } from "../left-sidebar/left-sidebar.component";
import { MiddleSidebarComponent } from "../middle-sidebar/middle-sidebar.component";
import { RightSidebarComponent } from "../right-sidebar/right-sidebar.component";
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [LeftSidebarComponent, MiddleSidebarComponent, RightSidebarComponent, NavbarComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
