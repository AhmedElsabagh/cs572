import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'users', loadChildren: () => import('../users/users.module').then(m => m.UsersModule) }
  // {path: 'users', component: UsersComponent, children: [{ path: 'users/:uuid', component: UserdetailsComponent }]}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
