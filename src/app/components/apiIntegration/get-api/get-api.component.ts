import { Component } from '@angular/core';
import { DepartmentService } from '../../../service/department.service';
import { AlertComponent } from '../../reusableComponent/alert/alert.component';
import { Iuser } from '../../model/interface';
import { Customer } from '../../model/class';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [AlertComponent, FormsModule, CommonModule],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {

  userList : Iuser [] = [];

  customerList: Customer [] = [];

  users: any[] = [];
  filteredUsers: any[]= [];
  searchText = '';

  currentPage = 1;
  itemsPerPage = 5;

  constructor( private deptSrv : DepartmentService ){}

    ngOnInit(): void {
    this.deptSrv.getUsers().subscribe({
      next: (val) => {
        this.users = val;
        this.filteredUsers = val;
        this.onSearch(); // Apply search filter on initial load
      },
      error: (err) => {
        console.error('API Error:', err);
      }
    });
  }

  
  // 🔍 Search Filter
  onSearch() {
    this.filteredUsers = this.users.filter(user =>
      user.includes(this.searchText.toLowerCase())
    );
    this.currentPage = 1;
  }

  // 📄 Pagination logic
  // paginatedUsers() {
  //   const start = (this.currentPage - 1) * this.itemsPerPage;
  //   return this.filteredUsers.slice(start, start + this.itemsPerPage);
  // }

  paginatedUsers() {
  const start = (this.currentPage - 1) * this.itemsPerPage;
  const end = start + this.itemsPerPage;
  return this.filteredUsers.slice(start, end);
}

  nextPage() {
    if (this.currentPage * this.itemsPerPage < this.filteredUsers.length) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  // getAllUser(){
  //   debugger
  //  this.deptSrv.getAllDept().subscribe((res:any)=>{
  //   debugger
  //   this.userList  = res;
  //  })
  // }



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
