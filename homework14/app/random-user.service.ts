import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RandomUserService {

  public ad
  //public myHeaders: any

  constructor(public http: HttpClient) { }
  emitter = new EventEmitter<Observable<object>>();

  getOnlineData() {
    // this.myHeaders = new Headers();
    // this.myHeaders.append('Content-Type','application/json');
    let d = this.http.get('https://randomuser.me/api/?results=10');
    return d;
  }

  getCachedData() {
    const obs$ = Observable.create(async (observer) => {
      this.ad = JSON.parse(localStorage.getItem('allUserData')).results;
      observer.next(this.ad);
      observer.complete();
    }).pipe(shareReplay(1))
    return obs$;
  }  

  checkIdExist(userId:string) {
    let isExist = false;
    this.getCachedData().subscribe((data) => {
      let result = data.find( s => s.login.uuid == userId);
      if(result){
        isExist = true;
      }
      else{
        isExist = false;
      }
    });
    return isExist
  }

  emitValue(value: Observable<object>){
    this.emitter.emit(value);
  }
}
