import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-dumb',
  template: `
  <div *ngFor="let obj of data" isVisible [visValue]="obj.visible" makeBigger [ngStyle]="{'font-size': '20px'}">
  Name: {{obj.name | multi:3}} , Work : {{obj.work}}
  </div>
  `,
  styles: ['']
})
export class DumbComponent implements OnInit {

  @Input('data') data;

  constructor() { }

  ngOnInit() {
  }

}
