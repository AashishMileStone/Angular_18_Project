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

  userObj: any = {
    userName: '',
    password: ''
  }

  router = inject(Router);
  http = inject(HttpClient)

  login() {
    if (this.userObj.userName === "admin" && this.userObj.password === "admin@2025") {
      alert("User login successfully");

      // Store in localStorage so all tabs see it
      localStorage.setItem('loginUser', this.userObj.userName);

      // Mark session active in this tab
      sessionStorage.setItem('sessionActive', 'true');

      // Navigate to previous page if exists, otherwise default
      const redirectUrl = sessionStorage.getItem('redirectUrl') || '/data-binding';
      sessionStorage.removeItem('redirectUrl');
      this.router.navigateByUrl(redirectUrl);
    } else {
      alert('Wrong Credentials');
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