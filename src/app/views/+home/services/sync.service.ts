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
    return this.httpClient.get<any>(`${env.apiURL}/countStudents`);
  }

  getCountProfesors(): Observable<any> {
    return this.httpClient.get<any>(`${env.apiURL}/countProfesors`);
  }

  getCountDoctors(): Observable<any> {
    return this.httpClient.get<any>(`${env.apiURL}/countDoctors`);
  }

  getCountMasters(): Observable<any> {
    return this.httpClient.get<any>(`${env.apiURL}/countMasters`);
  }

  getCountProjects(): Observable<any> {
    return this.httpClient.get<any>(`${env.apiURL}/countProjects`);
  }
}
