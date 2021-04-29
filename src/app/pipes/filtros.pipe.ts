import { Pipe, PipeTransform } from '@angular/core';
import { validTypes } from '../filtros/filtro.action';
import { Todo } from '../models/Todo';

@Pipe({
  name: 'filtros'
})
export class FiltrosPipe implements PipeTransform {

  transform(data: Todo[], value: validTypes): Todo[] {
    switch (value) {
      case 'pendientes':
        return data.filter(dat => !dat.state);
      case 'completados':
        return data.filter(dat => dat.state);
      default:
        return data;
    }
  }

}
