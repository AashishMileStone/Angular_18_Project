// import { Injectable, inject } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { User } from './Interface/user.model';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {

//   private http = inject(HttpClient);
//   private apiUrl = 'https://jsonplaceholder.typicode.com/users';

//   getUsers(): Observable<User[]> {
//     return this.http.get<User[]>(this.apiUrl);
//   }


//   addUser(user: User): Observable<User> {
//     return this.http.post<User>(this.apiUrl, user);
//   }


//   updateUser(id: number, user: User): Observable<User> {
//     return this.http.put<User>(`${this.apiUrl}/${id}`, user);
//   }


//   deleteUser(id: number): Observable<any> {
//     return this.http.delete(`${this.apiUrl}/${id}`);
//   }
// }



import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './Interface/user.model';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private http = inject(HttpClient);
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';
  private storageKey = 'users';

  // Load users (API first time, then localStorage)
  getUsers(): Observable<User[]> {

    const localData = localStorage.getItem(this.storageKey);

    if (localData) {
      return of(JSON.parse(localData));
    } else {
      return this.http.get<User[]>(this.apiUrl).pipe(
        tap(users => {
          localStorage.setItem(this.storageKey, JSON.stringify(users));
        })
      );
    }
  }

  // Save to localStorage helper
  private saveToLocalStorage(users: User[]) {
    localStorage.setItem(this.storageKey, JSON.stringify(users));
  }

  // Add User
  addUser(user: User): Observable<User[]> {
    const users = JSON.parse(localStorage.getItem(this.storageKey) || '[]');

    user.id = users.length ? Math.max(...users.map((u: User) => u.id!)) + 1 : 1;

    users.push(user);
    this.saveToLocalStorage(users);

    return of(users);
  }

  // Update User
  updateUser(updatedUser: User): Observable<User[]> {
    const users = JSON.parse(localStorage.getItem(this.storageKey) || '[]');

    const index = users.findIndex((u: User) => u.id === updatedUser.id);
    users[index] = updatedUser;

    this.saveToLocalStorage(users);

    return of(users);
  }

  // Delete User
  deleteUser(id: number): Observable<User[]> {
    const users = JSON.parse(localStorage.getItem(this.storageKey) || '[]');

    const updatedUsers = users.filter((u: User) => u.id !== id);

    this.saveToLocalStorage(updatedUsers);

    return of(updatedUsers);
  }
}


