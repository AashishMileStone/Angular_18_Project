import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css'
})
export class ReactiveComponent {


  studentForm : FormGroup = new FormGroup({
    firstName : new FormControl("", [Validators.required, Validators.minLength(3)]),
    lastName : new FormControl("", [Validators.required, Validators.minLength(3)]),
    userName : new FormControl("some@123", [Validators.email]),
    city : new FormControl("", [Validators.required, Validators.minLength(3)]),
    state: new FormControl("", [Validators.required, Validators.minLength(2)]),
    zipCode : new FormControl("", [Validators.required, Validators.minLength(4)]),
    isActiveTerm: new FormControl("", [Validators.required]),
  }) ;

  formValue:any;


  onSubmit(){
    this.formValue = this.studentForm.value;
  }

  resetForm(){

    this.studentForm.reset();

  }

}
