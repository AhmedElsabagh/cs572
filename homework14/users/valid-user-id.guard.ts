import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';

import { RandomUserService } from '../app/random-user.service';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ValidUserIdGuard implements CanActivate {
  // userData: any;
  // isValid: boolean
  constructor(private ru: RandomUserService, private rt:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    let isValidId = this.ru.checkIdExist(route.params.uuid);
    if(!isValidId){
      this.rt.navigate(['error']);
    }
    else{
      return true;
    }
    //return confirm('Are you sure?');
  }
}
