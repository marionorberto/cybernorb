import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-step-3',
  standalone: true,
  imports: [],
  templateUrl: './step-3.component.html',
  styleUrl: './step-3.component.css'
})
export class Step3Component {
  @Output() payload = new EventEmitter<boolean>(false);

  goToStep4() {
    this.payload.emit(true);
  }
}
