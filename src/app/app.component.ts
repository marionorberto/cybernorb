import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TopNavbarComponent } from "./components/top-navbar/top-navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { MainComponent } from "./components/main/main.component";
import { PrimeNGConfig } from 'primeng/api';
import { isPlatformBrowser } from '@angular/common';

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
export class AppComponent implements OnInit{
  title = 'tablecoin';
  showCardNewMessage: boolean = false;

  constructor(private primeNgConfig: PrimeNGConfig, @Inject(PLATFORM_ID) private platformId: Object) {}
 
   ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const loader = document.getElementById('loading-spinner');
      if (loader) {
        setTimeout(() => {
          loader.style.display = 'none';
        }, 3000)
      }
    }
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
