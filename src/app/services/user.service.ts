import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  baseurl = "http://localhost:8080";

  constructor(private http: HttpClient) { 

  }

  getUsers(){
    return this.http.get(`${this.baseurl}/home/getuser`);
  }
  

}
