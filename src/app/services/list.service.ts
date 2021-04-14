import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {List, ListResponse} from '../helpers/list';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private listUrl = 'http://proovitoo.twn.ee/api/list.json';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  getList(): Observable<ListResponse> {
    return this.http.get<ListResponse>(this.listUrl);
  }
}
