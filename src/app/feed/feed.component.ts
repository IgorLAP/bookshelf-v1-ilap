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
        return [];
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
