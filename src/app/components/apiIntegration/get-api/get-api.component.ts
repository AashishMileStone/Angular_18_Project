import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DepartmentService } from '../../../service/department.service';
import { AlertComponent } from '../../reusableComponent/alert/alert.component';
import { Iuser } from '../../model/interface';
import { Customer } from '../../model/class';


@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [AlertComponent],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {

   userList : Iuser [] = [];

  customerList: Customer [] = [];

  // constructor( private http : HttpClient){
  //  this.getAllUser();
  // }

  constructor( private deptSrv : DepartmentService ){
    
  }

  getAllUser(){
    debugger
   this.deptSrv.getAllDept().subscribe((res:any)=>{
    debugger
    this.userList  = res;
   })
  }



  // getAllUser(){
  //   this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res:any)=>{
  //   this.userList = res;
  //   })
  // }

  // getAllCustomer(){

  //   this.http.get("https://projectapi.gerasim.in/api/PropertyBookingController/GetAllCustomer").subscribe((result:any)=>{
  //     this.customerList = result.data;
  //   })
  
  // }

}
