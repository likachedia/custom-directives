import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../../shared/model';


@Pipe({
  name: 'mapNames'
})
export class MapNamesPipe implements PipeTransform {

  transform(value: User[] | undefined){
    return value?.reduce((acc, item) => acc + item.firstname + ',', '' );
  }

}
