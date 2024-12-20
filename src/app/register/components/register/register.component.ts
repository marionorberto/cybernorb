import { Component, OnInit } from '@angular/core';
import { Step1Component } from '../step-1/step-1.component';
import { Step2Component } from "../step-2/step-2.component";
import { Step3Component } from '../step-3/step-3.component';
import { Step4Component } from '../step-4/step-4.component';
import { Step5Component } from '../step-5/step-5.component';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    RouterLinkActive,
    Step1Component,
    Step2Component,
    Step3Component,
    Step4Component,
    Step5Component,
],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  showStep1: boolean = false;
  showStep2: boolean = false;
  showStep3: boolean = false;
  showStep4: boolean = false;
  showStep5: boolean = false;

  ngOnInit(): void {
    this.showStep1 = true;
  }

  constructor(private router: Router) {}

  onSubmit() {
    this.router.navigate(['/cybernorb/login'])
  }

  goToStep2(payload: any) {
    this.showStep1 = false;
    this.showStep2 = true;
  }

  goToStep3(payload: any) {
    this.showStep2 = false;
    this.showStep3 = true;
  }

  goToStep4(payload: any) {
    this.showStep3 = false;
    this.showStep4 = true;
  }

  goToStep5(payload: any) {
    this.showStep4 = false;
    this.showStep5 = true;
  }

  goBackToStep1(value: any) {
     this.showStep1 = true;
    this.showStep2 = false;
  }

  createAccount(finalPayload: any) {
    alert('account created sucessfully');
  }
}
