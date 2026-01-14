import { AsyncPipe, DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, interval, map } from 'rxjs';
import { NaPipe } from '../../../pipes/na.pipe';
import { DepartmentService } from '../../../service/department.service';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [NaPipe,AsyncPipe,JsonPipe,DatePipe,UpperCasePipe,LowerCasePipe,TitleCasePipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {

  firstName: string = "This is a demo Session";

  currentDate: Date = new Date();

  currentTime : Observable<Date> = new Observable<Date>;

  student: any = {
    JobId : 1,
    Name : 'Ashish',
    mobile : 8384453223,
    city : ''
  };

  currentRole: string = '';

 
  constructor(private deptService: DepartmentService ) { 
      this.currentTime= interval(1000).pipe(map(() => new Date()));
      this.deptService.onRoleChange$.subscribe((role: string)=>{
        debugger;
        this.currentRole = role;
      })
      this.deptService.role$.subscribe((_res:string)=>{
        debugger;
      })

  
  }

}
