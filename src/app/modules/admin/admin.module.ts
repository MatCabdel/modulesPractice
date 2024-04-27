import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { UsersComponent } from './components/feature/users/users.component';
import { UserListComponent } from './components/ui/user-list/user-list.component';


@NgModule({
  declarations: [
    HomeComponent,
    UsersComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
  ]
})
export class AdminModule { }
