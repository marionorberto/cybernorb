import { Component } from '@angular/core';
import { TopNavbarComponent } from '../top-navbar/top-navbar.component';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [
    TopNavbarComponent,
    FooterComponent
],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {

}
