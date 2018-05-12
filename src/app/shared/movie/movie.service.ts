import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MovieService {

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get('http://demo3977631.mockable.io/list');
  }
}