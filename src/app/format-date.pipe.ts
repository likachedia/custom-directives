import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {

  transform(value: Date, ...args: unknown[]) {
   const today = new Date()

   let day = today.getDate() - value.getDate();
   let month = today.getMonth() - value.getMonth();
   let year = today.getFullYear() - value.getFullYear();
   
    if(month < 1 ) {
      year =  day > 0 ? year : year - 1;
    }
    return year;
  }

}
