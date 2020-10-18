import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { FormPostModel } from '../Models/FormModel';
@Injectable({
  providedIn: 'root'
})
export class PostFormService {
  readonly BaseURI = 'https://localhost:44312/api/forms';
  httpHeader = { headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8')};
  constructor(private http: HttpClient) { }
  postData(data: FormPostModel) {
    var res = this.http.post(this.BaseURI, data, this.httpHeader);
    return res;
  }
}
