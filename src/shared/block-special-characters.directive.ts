import { Directive, HostListener } from "@angular/core";

@Directive({
  selector: "[appBlockSpecialCharacters]"
})
export class BlockSpecialCharactersDirective {
  keysToBlock = [33, 64, 35, 36, 37, 94, 38, 42, 40, 41, 95];

  constructor() {}

  @HostListener("keypress", ["$event"]) blockKeys(e: KeyboardEvent) {
    for (let i = 0; i < this.keysToBlock.length; i++) {
      if (e.which === this.keysToBlock[i]) {
        console.log(e.which, "is blocked");
        e.preventDefault();
      }
    }
  }
}
