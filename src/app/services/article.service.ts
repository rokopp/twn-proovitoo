import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Article} from '../helpers/article';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  // http://proovitoo.twn.ee/api/article.json
  private articleUrl = 'http://proovitoo.twn.ee/api/article.json';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  getArticles(): Observable<Article> {
    return this.http.get<Article>(this.articleUrl);
  }

}
