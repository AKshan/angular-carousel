import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DataInterface} from "./data.interface";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = './../assets/data.json';
  constructor(private http: HttpClient) { }

  getList(): Observable<any>{
    return this.http.get<DataInterface[]>(this.url);
  }
}
