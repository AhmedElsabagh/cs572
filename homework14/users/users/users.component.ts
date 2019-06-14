import { Component, OnInit } from '@angular/core';
import { RandomUserService } from '../../app/random-user.service';

@Component({
  selector: 'app-users',
  template: `
  <table style="width:100%">
  <tr>
    <th>Id</th>
    <th>Name</th>
    <th>Email</th> 
    <th>Phone</th>
  </tr>
  <tr *ngFor="let item of allData | async">
    <td>{{item.login.uuid}}</td>
    <td>{{item.name.title}} {{item.name.first}} {{item.name.last}}</td>
    <td>{{item.email}}</td> 
    <td>{{item.phone}}</td>
  </tr>
</table> 
  `,
  styles: ['']
})
export class UsersComponent implements OnInit {

  public allData

  constructor(public ru: RandomUserService) { }

  ngOnInit() {
    this.allData = this.ru.getCachedData();
  }

}
