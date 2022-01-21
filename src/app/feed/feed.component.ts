import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Dashboard } from './../models/dashboard';
import { AuthFirebaseService } from './../service/auth-firebase.service';
import { DashboardService } from './../service/dashboard.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent {

  dashItem$: Observable<Dashboard[]>;
  usuario$ = this.auth.usuarioLogado$;
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return this.dashItem$;
      }

      return this.dashItem$;
    })
  );

  constructor
  (
    private breakpointObserver: BreakpointObserver,
    private dashboardService: DashboardService,
    private auth: AuthFirebaseService
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
