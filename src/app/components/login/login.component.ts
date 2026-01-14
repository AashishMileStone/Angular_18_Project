import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  userObj : any = {
    userName: '',
    password: ''
  }

  router = inject(Router);
  http = inject(HttpClient)

  login() {
    if (this.userObj.userName == "admin" && this.userObj.password == "12345") {
      alert("User login successfully");
      localStorage.setItem('loginUser', this.userObj.userName);
      this.router.navigateByUrl('pipe')
    }
    else {
      alert('Wrong Credentials')
    }
  }
  

  //     debugger;
  //   this.router.navigateByUrl('data-binding')
  //   this.http.post("https://api.escuelajs.co/api/v1/auth/login", this.userObj).subscribe((res:any)=>{
  //     if(res.result) {
  //       alert("login Success");
  //       localStorage.setItem('loginUser', JSON.stringify(res.data) )
  //       this.router.navigateByUrl('data-binding')
  //     } else {
  //       alert(res.message)
  //       this.router.navigateByUrl('login')
  //     }
  //   })
  // }
  }