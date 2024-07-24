import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  //calling the server tio generate token

  generateToken(credentials: any) {
    //tiken generate
    return this.http.post(`${this.baseUrl}/auth/login`, credentials)
  }


  //for login user
  loginUser(token: any) {
    localStorage.setItem("token",token)
    return true;
  }

  //to check that user is logged in or not
  isLoggedIn() {
    let token = localStorage.getItem("token");
    if (token == undefined || token === '' || token == null) {
      return false;
    } else {
      return true;
    }
  }
  //for log out the user
  logout() {
    localStorage.removeItem("token");
  }

  //for getting the token
  getToken() {
    return localStorage.getItem("token");
  }

}
