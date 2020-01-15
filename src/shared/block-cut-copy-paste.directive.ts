import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appBlockCutCopyPaste]'
})
export class BlockCutCopyPasteDirective {

  constructor() { }

  @HostListener('cut', ['$event']) blockCut(e: KeyboardEvent) {
    e.preventDefault();
  }

  @HostListener('copy', ['$event']) blockCopy(e: KeyboardEvent) {
    e.preventDefault();
  }

  @HostListener('paste', ['$event']) blockPaste(e: KeyboardEvent) {
    e.preventDefault();
  }
}