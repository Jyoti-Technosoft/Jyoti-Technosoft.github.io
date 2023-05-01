import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(array: any, searchText: any): any {
    return array.filter(function(item) {
      for (var key in searchText) {
        if(searchText[key] == "All") {
          return true;
        }
        if (item[key] == null  || item[key] != (searchText[key] || "All"))
          return false;
      }
      return true;
    });
  }
}
  