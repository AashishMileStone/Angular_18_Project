import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  // sting, number, boolean, date

  coureseName : string = "Angular 18";
  inputType = "radio";
  RollNumber : number = 1;
  isIndian : boolean = true;
  currentDate : Date = new Date();
  myClassName : string = "bg-primary";
  isStateChange : string = "UP";
  name = signal("Ashish");

  constructor(){

  }

  changeCourseName(){
    this.coureseName = "React Js";
    this.name.set("Aahish Kumar")
  }

  showAlert(message : string){
   alert(message);
  }
}