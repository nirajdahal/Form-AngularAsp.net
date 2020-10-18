import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetFieldModel } from '../Models/FieldModel';
@Injectable({
  providedIn: 'root'
})
export class GetFieldService {
  readonly BaseURI = 'https://localhost:44312/api/field';
  httpHeader = { headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8') };
  constructor(private http: HttpClient) { }
  getData(): Observable<GetFieldModel> {
    var res = this.http.get<GetFieldModel>(this.BaseURI, this.httpHeader);
    return res;
  }
}
