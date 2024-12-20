import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-step-1',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './step-1.component.html',
  styleUrl: './step-1.component.css'
})
export class Step1Component {
  
  @Output() createAccount = new EventEmitter<boolean>(false);

  goToStep2() {
    this.createAccount.emit(true);
  }

}
