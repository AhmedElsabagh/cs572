import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';

@NgModule({
  declarations: [UsersComponent, UserdetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: UsersComponent },
      { path: 'users', component: UsersComponent },
      { path: ':uuid', component: UserdetailsComponent }
      //{path: 'users', component: UsersComponent, children: [{ path: 'child', component: UserdetailsComponent }]}
      // {
      //   path: 'users', component: UsersComponent, children: [{ path: 'child', component: UserdetailsComponent }]
      // }

    ])
  ],
  providers: [],
  bootstrap: [UsersComponent]
})
export class UsersModule { }
