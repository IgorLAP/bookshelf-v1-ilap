import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent {

  arrMoth: string[] = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: `O melhor livro de ${this.arrMoth[new Date().getMonth()]}`, img: '../../assets/images/1.png', cols: 1, rows: 1 },
          { title: 'Dica dos leitores', img: '../../assets/images/2.png', cols: 1, rows: 1 },
          { title: 'O mais comentado da semana', img: '../../assets/images/3.png', cols: 1, rows: 1 },
          { title: 'Indicação do time BookShelft', img: '../../assets/images/4.png', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: `O melhor livro de ${this.arrMoth[new Date().getMonth()]}`, img: '../../assets/images/1.png', cols: 2, rows: 1 },
        { title: 'Dica dos leitores', img: '../../assets/images/2.png', cols: 1, rows: 1 },
        { title: 'O mais comentado da semana', img: '../../assets/images/3.png', cols: 1, rows: 2 },
        { title: 'Indicação do time BookShelft', img: '../../assets/images/4.png', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
