import { Directive,HostListener,ElementRef,Renderer2 } from '@angular/core';

@Directive({
  selector: '[makeBigger]'
})
export class MakeBiggerDirective {

  public newFontSize:number

  constructor(private ele: ElementRef, private rend: Renderer2) { }

  @HostListener('dblclick') onDoubleClick() {
    // console.log(this.ele.nativeElement.style.fontSize);
    this.newFontSize = parseInt(this.ele.nativeElement.style.fontSize) + 2
    // console.log(this.newFontSize);
    this.rend.setStyle(this.ele.nativeElement, 'font-size', this.newFontSize + 'px')
    //console.log(this.ele.nativeElement.style.fontSize)
  }

}
