import { Component, ElementRef, ViewChild, AfterViewInit, viewChild } from '@angular/core';
import { AlertComponent } from '../../reusableComponent/alert/alert.component';
import { ParentComponent } from '../parent/parent.component';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-view-child',
  standalone: true,
  imports: [AlertComponent, ParentComponent, ChildComponent],
  templateUrl: './view-child.component.html',
  styleUrl: './view-child.component.css'
})

export class ViewchildComponent implements AfterViewInit {
  @ViewChild('txt') textBox?: ElementRef;
  @ViewChild(AlertComponent) alertComp?: AlertComponent;

  ngAfterViewInit(): void {
    const value = this.textBox?.nativeElement.value;
    debugger;
    const alertMode =  this.alertComp?.alertMode;
  }
}