import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-modal-large',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    DialogModule
  ],
  templateUrl: './modal-large.component.html',
  styleUrl: './modal-large.component.css'
})
export class ModalLargeComponent {

  @Input() cardProfileData: {
    visible: boolean, position: string
  } = { visible: false, position: 'bottom'};

  modalOptions: any = {
    drag: false,
    maximize: true,
  }

  constructor() {
    console.log('i passed through modal-large');
  }
}
