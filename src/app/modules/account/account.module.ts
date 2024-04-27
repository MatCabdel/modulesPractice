import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { RandomUserComponent } from './components/feature/random-user/random-user.component';
import { DisplayRandomUserComponent } from './components/ui/display-random-user/display-random-user.component';


@NgModule({
  declarations: [
    HomeComponent,
    RandomUserComponent,
    DisplayRandomUserComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
