import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TopNavbarComponent } from "./components/top-navbar/top-navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { MainComponent } from "./components/main/main.component";
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    TopNavbarComponent,
    FooterComponent,
    MainComponent,
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tablecoin';
  showCardNewMessage: boolean = false;

  constructor(private primeNgConfig: PrimeNGConfig) {}
  ngOnInit() {
    this.primeNgConfig.ripple = true;
  }

  showCardMessage(flag: boolean){

    if(flag){
      this.showCardNewMessage = true;
    }
  }

  closeCardNewMessage(element: MouseEvent){
    const cardMesage = document.querySelector('.card-new-message');
    cardMesage?.remove();
  }

}
