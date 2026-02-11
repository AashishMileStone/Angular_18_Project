import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../../service/user.service';
import { User } from '../../../service/Interface/user.model';

@Component({
  selector: 'app-usercurd',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './usercurd.component.html',
  styleUrl: './usercurd.component.css'
})
export class UsercurdComponent {

  private userService = inject(UserService);

  users: User[] = [];

  newUser: User = {
    name: '',
    username: '',
    email: ''
  };

  editingUser: User | null = null;


  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
  this.userService.getUsers().subscribe(data => {
    this.users = data;
  });
}

  // addUser() {
  //   this.userService.addUser(this.newUser).subscribe(user => {
  //     this.users.push(user);
  //     this.newUser = { name: '', username: '', email: '' };
  //   });
  // }

  editUser(user: User) {
    this.editingUser = { ...user };
  }

  // updateUser() {
  //   if (!this.editingUser?.id) return;

  //   this.userService.updateUser(this.editingUser.id, this.editingUser)
  //     .subscribe(updated => {
  //       const index = this.users.findIndex(u => u.id === updated.id);
  //       this.users[index] = updated;
  //       this.editingUser = null;
  //     });
  // }

  // deleteUser(id: number) {
  //   this.userService.deleteUser(id).subscribe(() => {
  //     this.users = this.users.filter(u => u.id !== id);
  //   });
  // }




addUser() {
  this.userService.addUser(this.newUser).subscribe(data => {
    this.users = data;
    this.newUser = { name: '', username: '', email: '' };
  });
}

updateUser() {
  if (!this.editingUser) return;

  this.userService.updateUser(this.editingUser)
    .subscribe(data => {
      this.users = data;
      this.editingUser = null;
    });
}

deleteUser(id: number) {
  this.userService.deleteUser(id)
    .subscribe(data => {
      this.users = this.users.filter(user => user.id !== id);
    });
}




}

