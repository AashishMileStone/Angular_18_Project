import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-attribute-directive',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.css'
})
export class AttributeDirectiveComponent {

  div1BgColor : string = "bg-primary";
  div2Toggle  : boolean = false;
  num1 : string = "";
  num2 : string ="";
  isActive : boolean = false;
  divDynamicStyleAdd : any = {
    'background-color' : 'red',
    'color' : 'white',
    'width' : '200px',
    'height' : '200px'
  }

  addBlue(){
    this.div1BgColor = "bg-primary";

  }

   addRed(){
     this.div1BgColor = "bg-danger";
  }

  toggleclass(){
    this.div2Toggle = !this.div2Toggle;
  }

    studentList : any[] = [
    {id: 1, TotalMakrs : 73,  Gender : 'Male', Name: 'Ashish', City: 'Muzaffarnagar',  Occupation: 'Sr. UI Developer', isActive: false},
    {id: 2, TotalMakrs : 45, Gender : 'Female', Name: 'Parul', City: 'Haridwar',  Occupation: 'Business', isActive: true},
    {id: 3, TotalMakrs : 89,  Gender : 'Male', Name: 'Anuj', City: 'Muzaffarnagar',  Occupation: 'Engineer', isActive: true},
    {id: 4, TotalMakrs : 97, Gender : 'Female', Name: 'Aarti', City: 'Roorkee',  Occupation: 'Sr. Software Engineer', isActive: true},
    {id: 5, TotalMakrs : 69, Gender : 'Male', Name: 'Sunil', City: 'Rishikesh',  Occupation: 'Sr. frontEnd Developer', isActive: false},
    
  ]

}
