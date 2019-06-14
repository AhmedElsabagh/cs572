import { Component,Output } from '@angular/core';
import { RandomUserService } from './random-user.service';

@Component({
  selector: 'app-root',
  template:`
  <router-outlet></router-outlet>
  `,
  styles: ['']
})
export class AppComponent {
  title = 'homework14';

  constructor(public ru : RandomUserService){
  }

  ngOnInit() {
    this.ru.getOnlineData().subscribe(data => {
      localStorage.setItem('allUserData', JSON.stringify(data));
      //console.log(JSON.stringify(data));
    });

    // this.ru.getCachedData()
  }
}
