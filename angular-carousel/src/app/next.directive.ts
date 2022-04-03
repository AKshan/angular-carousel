import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appNext]'
})
export class NextDirective {

  constructor(private el: ElementRef) {
     /* setInterval(()=>{
         this.next()
      }, 2000)*/
  }

 /* @HostListener('click') next(){

   let element = this.el.nativeElement.parentElement.parentElement.children[0];
   let item = element.children;
   element.append(item[0]);
  }*/

}
