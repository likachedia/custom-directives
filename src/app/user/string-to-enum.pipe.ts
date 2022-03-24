import { Pipe, PipeTransform } from '@angular/core';
import { Status } from '../shared/model';

@Pipe({
  name: 'stringToEnum'
})
export class StringToEnumPipe implements PipeTransform {

  transform(value: string) {
    console.log(value);
    switch(value) {
      case Status.active:
        return value = Status.active;
      case Status.inactive:   
        return value = Status.inactive;
      case Status.deleted:   
        return value=Status.deleted;
      default:
        return value=Status.active;
    }
    
    
  }

}
