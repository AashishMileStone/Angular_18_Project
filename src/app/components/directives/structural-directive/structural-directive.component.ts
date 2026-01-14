import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-structural-directive',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './structural-directive.component.html',
  styleUrl: './structural-directive.component.css'
})
export class StructuralDirectiveComponent {

  // Variable declares

  div1HideShow : boolean = true; 
  div2Toggle : boolean = true;
  num1 : string = '';
  num2 : string = '';
  isActive : boolean = true;
  selectedState : string = "USA";

  constructor(private router : Router){

  }


// Function create for *ngIf structural directive
  showDiv1(){
    this.div1HideShow = true;
  }

  hideDiv1(){
    this.div1HideShow = false;
  }

  toggle(){
    this.div2Toggle = !this.div2Toggle;

    // if(this.div2Toggle == true){
    //   this.div2Toggle = false;
    // }
    // else{
    //   this.div2Toggle = true;
    // }
  }

  // Function create for *ngfor structural directive

  cityArray : string[] = ['Haridwar', 'Muzaffarnagar', 'Roorkee', 'Noida', 'Meerut' ]

  studentList : any[] = [
    {id: 1, Name: 'Ashish', City: 'Muzaffarnagar',  Occupation: 'Sr. UI Developer'},
    {id: 2, Name: 'Nitin', City: 'Haridwar',  Occupation: 'Business'},
    {id: 3, Name: 'Anuj', City: 'Muzaffarnagar',  Occupation: 'Engineer'},
    {id: 4, Name: 'Nishnt', City: 'Roorkee',  Occupation: 'Sr. Software Engineer'},
    {id: 5, Name: 'Sunil', City: 'Rishikesh',  Occupation: 'Sr. frontEnd Developer'},
    
  ]

  navigateToAttribute(){
  this.router.navigateByUrl('Attribute-dir')
  }



}
