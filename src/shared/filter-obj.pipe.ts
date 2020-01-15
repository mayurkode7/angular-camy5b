import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filterObj"
})
export class FilterObjPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return value.filter(item => {
      if (args.length > 2) {
        return item.name.toLowerCase().includes(args);
      }

      return value;
    });
  }
}
