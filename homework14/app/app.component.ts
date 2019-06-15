import { Component,Output } from '@angular/core';
import { RandomUserService } from './random-user.service';

@Component({
  selector: 'app-root',
  template:`
  <a [routerLink]="['']">home</a>
  <a [routerLink]="['users']">Users</a>
  <router-outlet></router-outlet>
  `,
  styles: [`
  a {margin: 5px; }
  a:link, a:visited {
    background-color: #f44336;
    color: white;
    padding: 14px 25px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
  }
  
  a:hover, a:active {
    background-color: red;
  }
  `]
})
export class AppComponent {
  title = 'homework14';

  constructor(public ru : RandomUserService){
  }

  ngOnInit() {
    this.ru.getOnlineData().subscribe(data => {
      localStorage.setItem('allUserData', JSON.stringify(data));
      //console.log(JSON.stringify(data));
      this.ru.emitValue(this.ru.getCachedData());
    });

  }
}
