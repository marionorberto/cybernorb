import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TopNavbarComponent } from "./components/top-navbar/top-navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { MainComponent } from "./components/main/main.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    TopNavbarComponent,
    FooterComponent,
    MainComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tablecoin';
  showCardNewMessage: boolean = false;

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
