import { Component, Output } from '@angular/core';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-interests',
  standalone: true,
  imports: [],
  templateUrl: './interests.component.html',
  styleUrl: './interests.component.css'
})
export class InterestsComponent {


  // send() {
  //      this.interests.emit(
  // [
  //     {
  //       id: 1,
  //       description: 'Backend',
  //       urlImage: '', 
  //     },
  //     {
  //       id: 2,
  //       description: 'mobile programming',
  //       urlImage: '', 
  //     },
  //     {
  //       id: 3,
  //       description: 'soc',
  //       urlImage: '', 
  //     },
  //     {
  //       id: 4,
  //       description: 'web programming',
  //       urlImage: '', 
  //     },
  //     {
  //       id: 5,
  //       description: 'Pentest',
  //       urlImage: '', 
  //     },
  //     {
  //       id: 6,
  //       description: 'Frontend',
  //       urlImage: '', 
  //     }
  // ])
  // }
}
