import { Component } from '@angular/core';
import { Step1Component } from '../step-1/step-1.component';
import { Step2Component } from "../step-2/step-2.component";
import { Step3Component } from '../step-3/step-3.component';
import { Step4Component } from '../step-4/step-4.component';
import { Step5Component } from '../step-5/step-5.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    Step1Component,
    Step2Component,
    Step3Component,
    Step4Component,
    Step5Component,
],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

}
