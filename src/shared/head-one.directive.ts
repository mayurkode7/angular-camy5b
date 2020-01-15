import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[appHeadOne]"
})
export class HeadOneDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.color = "blue";
  }
}
