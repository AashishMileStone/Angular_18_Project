import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-if-else',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule,],
  templateUrl: './if-else.component.html',
  styleUrl: './if-else.component.css'
})
export class IfElseComponent {

  divVisible : boolean = true;
  div1BgColor : string = "bg-primary";
  div2Toggle  : boolean = false;
  num1 : string = "";
  num2 : string ="";
  statusSelected : string = '';


  hideDiv1(){
    this.divVisible = false;
  }

   showDiv1(){
     this.divVisible = true;
  }

  toggleclass(){
    this.div2Toggle = !this.div2Toggle;
  }

 

}
