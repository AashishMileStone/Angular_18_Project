import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [FormsModule, JsonPipe, NgIf],
  templateUrl: './template.component.html',
  styleUrl: './template.component.css'
})

export class TemplateComponent {

  studentObj : any = {
    firstName : '',
    lastName: '',
    userName : '',
    city : '',
    state: '',
    zipCode : '',
    isActiveTerm: false
  }

  formValue:any;

  selectedOption: string = '';

  onSubmit(){
   this.formValue = this.studentObj
  }

  resetForm(){
    this.studentObj={
    firstName : '',
    lastName: '',
    userName : '',
    city : '',
    state: '',
    zipCode : '',
    isActiveTerm: false
  }
  }
}
