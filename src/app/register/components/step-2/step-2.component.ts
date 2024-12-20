import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-step-2',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterLink,
  ],
  templateUrl: './step-2.component.html',
  styleUrl: './step-2.component.css'
})
export class Step2Component {
  
  @Output() payload = new EventEmitter<boolean>(false);
  @Output() back = new EventEmitter<boolean>(false);

  goToStep3() {
    this.payload.emit(true);
  }

  goBack() {
    this.back.emit(true);
  }
}
