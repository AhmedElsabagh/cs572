import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { ValidUserIdGuard } from './valid-user-id.guard'

@NgModule({
  declarations: [UsersComponent, UserdetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: UsersComponent, children: [{ path: ':uuid', component: UserdetailsComponent ,canActivate: [ValidUserIdGuard]}]
      }
    ])
  ],
  providers: [ValidUserIdGuard],
  bootstrap: [UsersComponent]
})
export class UsersModule { }
