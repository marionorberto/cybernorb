import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ModalService } from '../../services/modal.service';

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
export class ModalLargeComponent implements OnInit {

  @Input() cardProfileData: {
    visible: boolean, position: string
  } = { 
    visible: false,
    position: 'bottom'
  };

  modalOptions: any = {
    drag: false,
    maximize: true,
  }

  constructor(private modalService: ModalService) {
   
  }

  ngOnInit() {
    // this.modalService.modalVisible.subscribe((val) => {
    //   this.cardProfileData.visible = val;
    // });
  }
}
