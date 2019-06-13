import { Component,Output } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <Counter [counter]='7' (counterChange)='showCurrentCount($event) '></Counter>
  <div>Component Counter Value = {{ComponentCounterValue}}</div>

  <Counter [counter]='8' (counterChange)='showCurrentCount1($event) '></Counter>
  <div>Component Counter Value = {{ComponentCounterValue1}}</div>

  <Counter [counter]='9' (counterChange)='showCurrentCount2($event) '></Counter>
  <div>Component Counter Value = {{ComponentCounterValue2}}</div>
  `,
  styles: ['']
})
export class AppComponent {
  title = 'homework12';
  public ComponentCounterValue:number;
  public ComponentCounterValue1:number;
  public ComponentCounterValue2:number;

  showCurrentCount(data:number){
    this.ComponentCounterValue = data;
  }

  showCurrentCount1(data:number){
    this.ComponentCounterValue1 = data;
  }

  showCurrentCount2(data:number){
    this.ComponentCounterValue2 = data;
  }
}
