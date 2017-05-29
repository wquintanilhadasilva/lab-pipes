import { Pipe, PipeTransform } from '@angular/core';
import { FiltroPipe } from './filtro.pipe';

@Pipe({
  name: 'filtroImpuro',
  pure: false //Trasnforma o pipe em um pipe impuro:
              // atualiza os dados da view segundo alterações no modelo automaticamente
})
export class FiltroImpuroPipe extends FiltroPipe { //herda do pipe puro!!

  /*transform(value: any, args?: any): any {
    return null;
  }
  */

}
