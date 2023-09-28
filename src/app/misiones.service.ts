import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { timeout } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MisionesService {

  private apiUrl = 'https://api.spacexdata.com/v4';
  constructor(private http: HttpClient) { }

  getUpcomingLaunches() {
    return this.http
      .get(`${this.apiUrl}/launches/upcoming`)
      .pipe(timeout(10000));
  }

  getLaunches(missionId: string) {
    return this.http
      .get(`${this.apiUrl}/launches/${missionId}`)
      .pipe(timeout(10000));
  }

  getRocket(nombreRocket: string) {
    return this.http
      .get(`${this.apiUrl}/rockets/${nombreRocket}`)
      .pipe(timeout(10000));
  }

  getRockets() {
    return this.http
      .get('https://api.spacexdata.com/v4/rockets')
      .pipe(timeout(10000));
  }

  getDetallesCohete(coheteId: string) {
    return this.http
      .get(`${this.apiUrl}/rockets/${coheteId}`)
      .pipe(timeout(10000));
  }
}
