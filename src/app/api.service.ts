import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b8a42baa7afc47f3b8d767698b61d165';

  constructor(private http: HttpClient) {}

  topHeadLines(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
