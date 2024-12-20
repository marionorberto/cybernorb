import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-step-5',
  standalone: true,
  imports: [],
  templateUrl: './step-5.component.html',
  styleUrl: './step-5.component.css'
})
export class Step5Component {
  @Output() payload = new EventEmitter<boolean>(false);

  gatherPayload() {
    this.payload.emit(true);
  }
} 
