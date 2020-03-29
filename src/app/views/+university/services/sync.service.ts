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

  getBoardDirectors(): Observable<any> {
    return this.httpClient.get<any>(`${env.productionAppUrl}/countBoardDirectors`);
  }
}
