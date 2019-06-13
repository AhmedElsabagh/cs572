import { Component, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'Counter',
  template: `
    
    <button (click)='decreament()'>-</button>
    {{counterValue}}
    <button (click)='increament()'>+</button>
  `,
  styles: ['']
})
export class CounterComponent {    
    counterValue:number = 0;
    @Input() counter:number;
    @Output() counterChange = new EventEmitter<number>();

    ngOnInit() {
        if(!this.counter){
            this.counter = 0;
        }
        this.counterValue = this.counter;
        this.counterChange.emit( this.counterValue);
    }

    decreament(){
        this.counter--;
        this.counterValue = this.counter;
        this.counterChange.emit( this.counterValue);
    }

    increament(){
        this.counter++;
        this.counterValue = this.counter;
        this.counterChange.emit( this.counterValue);
    }

}