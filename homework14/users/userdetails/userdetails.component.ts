import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from "@angular/router";
import { Subscription, Observable } from "rxjs";

import { RandomUserService } from '../../app/random-user.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  private subscription: Subscription;
  id:string;
  userData: any;

  constructor(private route: ActivatedRoute,public ru: RandomUserService) {
    this.subscription = route.params.subscribe(
      (params: any) => {
        this.id = params['uuid'];
        this.ru.getCachedData().subscribe((data) => {
          //console.log(data);
          this.userData = data.find( s => s.login.uuid == this.id);
        });
      }
    );
  }

  ngOnInit() {
    
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
