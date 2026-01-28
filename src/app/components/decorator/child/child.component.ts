import { Component, Input, EventEmitter, Output} from '@angular/core';
// import { NgIf } from '@angular/common';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
 
  @Input() name!: string;
  @Input() userAge!: number; 

  @Output() datafromchild = new EventEmitter<string>();

  isLoggedIn: any;

  sendDataToParent() {
    this.datafromchild.emit("Data from child to Parent Component")
  }


}
