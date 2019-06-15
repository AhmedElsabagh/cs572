import { Component, OnInit } from '@angular/core';
import { RandomUserService } from '../../app/random-user.service';

@Component({
  selector: 'app-users',
  template: `
  <table id="customers">
  <tr>
    <th>Id</th>
    <th>Name</th>
    <th>Email</th> 
    <th>Phone</th>
  </tr>
  <tr *ngFor="let item of (allData | async)">
    <td><a [routerLink]="[item.login.uuid]">{{item.login.uuid}}</a></td>
    <td>{{item.name.title}} {{item.name.first}} {{item.name.last}}</td>
    <td>{{item.email}}</td> 
    <td>{{item.phone}}</td>
  </tr>
</table> 
<router-outlet></router-outlet>
  `,
  styles: [`
  #customers {
    font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }
  
  #customers td, #customers th {
    border: 1px solid #ddd;
    padding: 8px;
  }
  
  #customers tr:nth-child(even){background-color: #f2f2f2;}
  
  #customers tr:hover {background-color: #ddd;}
  
  #customers th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: Maroon;
    color: white;
  }
  `]
})
export class UsersComponent implements OnInit {

  public allData

  constructor(public ru: RandomUserService) { }

  ngOnInit() {
    // this.ru.getCachedData();
    this.allData = this.ru.getCachedData();

    this.ru.emitter.subscribe(data => {
      this.allData = data;
    })
  }

  // canDeactivate(): Observable<boolean> | boolean {
  //   if (!this.done) {
  //     return confirm('Do you want to leave?');
  //   }
  //   return true;
  // }

}
