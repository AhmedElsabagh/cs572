import { Directive, ElementRef, Renderer2,Input } from '@angular/core';

@Directive({
  selector: '[isVisible]'
})
export class IsVisibleDirective {

  @Input('visValue') visible : boolean = true
  public displaySts : string

  constructor(private elem : ElementRef , private rend : Renderer2) {
    this.displaySts = 'block'
  }

  ngOnInit() {
    if(!this.visible) {
      this.displaySts = 'none'
    }
    else{
      this.displaySts = 'block'
    }

    this.rend.setStyle(this.elem.nativeElement, 'display',this.displaySts);
  }

}
