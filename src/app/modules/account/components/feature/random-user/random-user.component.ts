import { Component, inject } from '@angular/core';
import { UsersService } from '../../../../../shared/users.service';
import { User } from '../../../../../models/user';

@Component({
  selector: 'app-random-user',
  templateUrl: './random-user.component.html',
  styleUrl: './random-user.component.scss'
})
export class RandomUserComponent {

  UserRandomList: User[] = [];

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.userService.getRandomUser().subscribe(usersFromJsonFile => {
      this.UserRandomList = [usersFromJsonFile]; 
    });
  }
}
