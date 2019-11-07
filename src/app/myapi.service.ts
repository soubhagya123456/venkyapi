import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {post} from './postal';
@Injectable({
  providedIn: 'root'
})
export class MyapiService {

  constructor(private httpclient:HttpClient) { }

  getdata():Observable<any>{
    return this.httpclient.get("https://jsonplaceholder.typicode.com/todos");
  }

  getparam():Observable<any>{
    let param1 = new HttpParams().set("userId","1");
    return this.httpclient.get("http://jsonplaceholder.typicode.com/posts?userId=1",{params:param1});
  }

  postdata(opost:post):Observable<any>{
    return this.httpclient.post("http://jsonplaceholder.typicode.com/posts?userId=1",opost);
  }
}
