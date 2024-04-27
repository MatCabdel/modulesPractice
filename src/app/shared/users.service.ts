import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private http = inject(HttpClient);

  constructor() { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>("assets/users.json");
  }

  getRandomUser(): Observable<User> {
    return this.getUsers().pipe(
      map(users => {
        const randomIndex = Math.floor(Math.random() * users.length);
        return users[randomIndex];
      })
    );
  }
}
