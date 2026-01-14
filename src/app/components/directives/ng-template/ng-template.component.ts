import { CommonModule } from '@angular/common';
import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({ 
  selector: 'app-ng-template',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-template.component.html',
  styleUrl: './ng-template.component.css'
})
export class NgTemplateComponent {


  isUserLoggedIn: boolean = false;
  loggerUserName: string = "Chetan";

  @ViewChild('dyamicTem') dyanTemplate : TemplateRef<any> | undefined;
  @ViewChild('dyamicContainer', {read:ViewContainerRef}) dyanContanier : ViewContainerRef | undefined;

  loadTemplate() {
    if(this.dyanTemplate) {
      this.dyanContanier?.createEmbeddedView(this.dyanTemplate)
    }
  }
}
