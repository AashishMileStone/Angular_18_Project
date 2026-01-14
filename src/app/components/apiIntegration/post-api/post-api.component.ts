import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlertComponent } from "../../reusableComponent/alert/alert.component";
import { Department } from '../../model/class';
import { IDepartmentList } from '../../model/interface';

@Component({
  selector: 'app-post-api',
  standalone: true,
  imports: [FormsModule, AlertComponent],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent  {

deptObj: Department = new Department();

 deptList: IDepartmentList[] = [];


  // deptList: any[] = [];

  // http = inject(HttpClient)

  // ngOnInit(): void {
  //   this.getDepartment();
  // }

  // onUpdate() {
  //  this.http.post("https://projectapi.gerasim.in/api/Complaint/UpdateDepartment", this.deptObj).subscribe((res:any)=>{
  //   if(res.result){
  //    alert("Department Updated Successfully");
  //   }
  //   else{
  //     alert(res.message);
  //   }
  //  })
  // }

  // onDelete(id:number){
  //  const isDelete = confirm("Are you sure want to delete")
  //  if(isDelete){
  //   this.http.delete("https://projectapi.gerasim.in/api/Complaint/DeletedepartmentBydepartmentId?departmentId=" +id).subscribe((res:any)=>{
  //   if(res.result){
  //    alert("Department Deleted Successfully");
  //   }
  //   else{
  //     alert(res.message);
  //   }
  //  })
  //  }
  // }

  // onSave() {
  //  this.http.post("https://projectapi.gerasim.in/api/Complaint/AddNewDepartment", this.deptObj).subscribe((res:any)=>{
  //   if(res.result){
  //    alert("Department Created Successfully");
  //   }
  //   else{
  //     alert(res.message);
  //   }
  //  })
  // }

  // getDepartment(){
  //   this.http.get("https://projectapi.gerasim.in/api/Complaint/GetParentDepartment").subscribe((res:any)=>{
  //     this.deptList =res.data;
  //   })
  // }

  // onEdit(data:any) {
  //  this.deptObj=data;
  // }
}
