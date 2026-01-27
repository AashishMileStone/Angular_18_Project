import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  // parentData: string = "Data from Parent to Child Component";

   userName: string = 'Ashish Kumar';
   age = 28;

messageFromChild: string = '';

receivedData(value: string) {
  this.messageFromChild = value;
}

}
