import { Component, inject } from '@angular/core';
import { User } from '../../../../../models/user';
import { UsersService } from '../../../../../shared/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {

  UserList: User[] = [];

  private userService = inject(UsersService);

  ngOnInit(): void {
    this.userService.getUsers().subscribe(usersFromJsonFile => {
      this.UserList = usersFromJsonFile;
    });

  }

}
