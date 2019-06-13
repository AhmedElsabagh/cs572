import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multi'
})
export class MultiPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let num = parseInt(args);
    let concatString = ''
    for(let i = 0; i < num; i++){
      concatString += value;
      if(i < num - 1) {
        concatString += " ";
      }
    }
    return concatString;
  }

}
