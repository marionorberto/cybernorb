import { Component, NgModule } from '@angular/core';
import { TopNavbarComponent } from '../top-navbar/top-navbar.component';
import { FooterComponent } from "../footer/footer.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-news',
  standalone: true,
  imports: [
    TopNavbarComponent,
    FooterComponent,
    FormsModule,
    CommonModule,
    DialogModule,
    ButtonModule
],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {

  visible: boolean = false;
  position: string = 'center';

  showDialog() {
    this.position = "bottom";
    this.visible = true;
  }
}
