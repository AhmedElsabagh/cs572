import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-smart',
  template: `
  <app-dumb [data]="data"></app-dumb>
  `,
  styles: ['']//,
  //changeDetection : ChangeDetectionStrategy.OnPush
})
export class SmartComponent implements OnInit {

  data = [{name: "Asaad" ,work: "prof", visible: true},{name: "Ahmed" ,work: "Student", visible: true},
  {name: "Kareem" ,work: "student", visible: false}];

  constructor() { }

  ngOnInit() {
  }

}
