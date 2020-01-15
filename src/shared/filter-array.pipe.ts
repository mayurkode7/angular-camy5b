import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filterArray"
})
export class FilterArrayPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    //console.log(value);
    //console.log(args);
    return value.filter(item => {
      return item.toLowerCase().includes(args);
    });
  }
}
