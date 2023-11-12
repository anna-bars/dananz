import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  headers = new HttpHeaders({'Content-Type': 'application/json',});
  constructor(public http: HttpClient) {}
  
  getData<Type> (url: string) {
    return this.http.get<Type>(url);
  }
  // post<Type>(url: string, obj: Type){
  //   return this.http.post(url, obj);
  // }
  post<Type>(url: string, obj: Type){
    return this.http.post(url, obj);
  }
  putData<Type>(url: string, obj: Type) {
    return this.http.put(url, obj, { headers: this.headers });
  }
  postContact(url: string, obj: Contact){
    return this.http.post(url, obj);
  }
  deleteData(url: string) {
    return this.http.delete(url, { headers: this.headers });
  }
}
 