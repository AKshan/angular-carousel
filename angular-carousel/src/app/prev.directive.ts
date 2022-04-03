import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appPrev]'
})
export class PrevDirective {

  constructor(private el: ElementRef) {
  }

 /* @HostListener('click') prev(){
    let elements = this.el.nativeElement.parentElement.parentElement.children[0];
    let item = elements.children;
    elements.prepend(item[item.length - 1])
  }*/

}
