import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ListApiService {

  apiUrl = 'https://rickandmortyapi.com/api/character/86';

  constructor(private httpClient: HttpClient) { }

  getList(): Observable<any> {
    return this.httpClient.get<any>(this.apiUrl);
  }
}
