import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges,ElementRef, afterNextRender, AfterRenderPhase } from '@angular/core';


@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent {

  alertMode : string = 'Demo check';

  @Input() message : string = '';
  @Input() alertType : string = '';

   ngOnChanges(changes: SimpleChanges): void {
    debugger;
    console.log('ngOnChanges')
  }


}
