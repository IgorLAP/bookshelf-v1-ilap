import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Dashboard } from './../models/dashboard';
import { DashboardService } from './../service/dashboard.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent {

  usuario = {username: 'Igor Pedrosa', icone: 'remember_me'}
  dashItem$: Observable<Dashboard[]>;
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: `O melhor livro de `, img: '../../assets/images/1.png', cols: 1, rows: 1 },
          { title: 'Dica dos leitores', img: '../../assets/images/2.png', cols: 1, rows: 1 },
          { title: 'O mais comentado da semana', img: '../../assets/images/3.png', cols: 1, rows: 1 },
          { title: 'Indicação do time BookShelft', img: '../../assets/images/4.png', cols: 1, rows: 1 }
        ];
      }

      return this.dashItem$;
    })
  );

  constructor
  (
    private breakpointObserver: BreakpointObserver,
    private dashboardService: DashboardService
  ) {
    this.dashItem$ = dashboardService.listagemDashboard()
    .pipe(
      catchError(err=>{
        return of ([])
      }
      )
    )
  }
}
