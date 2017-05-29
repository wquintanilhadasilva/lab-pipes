import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo: 'Learning javaScript data structures and Algorithms 2dn edition',
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'http://a.co/glgjpRP'
  };

  livros:any[] = ['Java', 'Angular 2'];

  filtro:string;

  valorAssincrono = new Promise((resolve,reject) => {
    setTimeout(() => resolve('Valor assíncrono'), 2000);
  });

  valorAssincrono2 = Observable.interval(3000).map(valor => 'Valor assíncrono Observable');
  constructor() { }

  ngOnInit() {
  }

  obterCursos(){
    if(this.livros.length === 0 || this.filtro === undefined || this.filtro.trim() === ''){
      return this.livros;
    }

    return this.livros.filter(
      (v:string) => {
        if(v.toLocaleLowerCase().indexOf(this.filtro.toLocaleLowerCase()) >= 0) {
          return true;
        }
        return false;
      }
    );

  }

}
