import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomUserService {

  public myHeaders: any
  constructor(public http: HttpClient) { }

  getOnlineData() {
    // this.myHeaders = new Headers();
    // this.myHeaders.append('Content-Type','application/json');
    let d = this.http.get('https://randomuser.me/api/?results=10');
    return d;
  }

  getCachedData() {
    const obs$ = Observable.create(async (observer) => {
      let ad = localStorage.getItem('allUserData');
      observer.next(JSON.parse(ad).results);
      observer.complete();
    })
    return obs$;
  }
}
