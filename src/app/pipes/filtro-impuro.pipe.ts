import { Pipe, PipeTransform } from '@angular/core';
import { FiltroPipe } from './filtro.pipe';

@Pipe({
  name: 'filtroImpuro',
  pure: false
})
export class FiltroImpuroPipe extends FiltroPipe { //herda do pipe puro!!

  /*transform(value: any, args?: any): any {
    return null;
  }
  */

}
