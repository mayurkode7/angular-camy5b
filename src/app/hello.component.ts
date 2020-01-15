import { Component, Input } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "hello",
  template: `
    <h4 appHeadOne>Hello {{ name }}!</h4>
    <br />
    <p> what u sent is {{ params }} </p>


  `,


  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent {
  @Input() name: string = "";
  params = null;
  constructor(private router: Router, private ar: ActivatedRoute) {
    this.name = this.router.url;
    this.params = this.ar.snapshot.paramMap.get("id");
  }
}
