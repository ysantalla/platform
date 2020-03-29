import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { environment as env } from '@env/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SyncService {

  constructor(
    private httpClient: HttpClient
  ) {}

  getCountStudents(): Observable<any> {
    return this.httpClient.get<any>(`${env.productionAppUrl}/countStudents`);
  }

  getCountProfesors(): Observable<any> {
    return this.httpClient.get<any>(`${env.productionAppUrl}/countProfesors`);
  }

  getCountDoctors(): Observable<any> {
    return this.httpClient.get<any>(`${env.productionAppUrl}/countDoctors`);
  }

  getCountMasters(): Observable<any> {
    return this.httpClient.get<any>(`${env.productionAppUrl}/countMasters`);
  }

  getCountProjects(): Observable<any> {
    return this.httpClient.get<any>(`${env.productionAppUrl}/countProjects`);
  }
}
