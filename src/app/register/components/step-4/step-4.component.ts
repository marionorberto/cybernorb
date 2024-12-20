import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step-4',
  standalone: true,
  imports: [],
  templateUrl: './step-4.component.html',
  styleUrl: './step-4.component.css'
})
export class Step4Component {
  @Output() payload = new EventEmitter<boolean>(false);

  constructor(private router: Router){}

  goToStep5() {
    this.payload.emit(true);
    this.router.navigate(['/cybernorb/login'])
  }
}
