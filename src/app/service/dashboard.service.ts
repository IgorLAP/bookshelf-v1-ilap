import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Dashboard } from './../models/dashboard';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private readonly urlAPI = 'assets/dashboard.json';

  constructor(private http: HttpClient) { }

  listagemDashboard(){
    return this.http.get<Dashboard[]>(this.urlAPI);
  }
}
