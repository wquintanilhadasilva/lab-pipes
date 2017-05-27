import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  //um pipe puro não olha as mudanças realizadas no estado do objeto que está escutando.
  //Um pipe impuro fica escutando as mudanças no objeto e aplica o filtro novamente

  transform(value: any, args?: any): any {

    if(value.lenght === 0 || args === undefined){
      return value;
    }

    let filter = args.toLocaleLowerCase();
    return value.filter(
      v => v.toLocaleLowerCase().indexOf(filter) != -1 //utiliza o filtro do javascript para as palavras enviadas
    );
  }

}
