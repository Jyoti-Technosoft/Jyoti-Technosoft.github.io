import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'distinctvalue'
})
export class DistinctvaluePipe implements PipeTransform {

  transform(value: any,field:string): any {
    let unique:any = [];
    let distinct:any = [];
    for (let i = 0; i < value?.length; i++) {
      if (!unique[value[i][`${field}`]]) {
        distinct.push(value[i]);
        unique[value[i][`${field}`]] = 1;
      }
    }
    return distinct;
  }

}
