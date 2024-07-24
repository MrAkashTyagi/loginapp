import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";
import { NgModel } from "@angular/forms";




@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private loginService: LoginService){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        'Content-Type' : 'application/json; charset=utf-8',
        'Accept'       : 'application/json',
        'Authorization': `Bearer ${this.loginService.getToken()}`,
      },
    });

    return next.handle(req);
  }
}


// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {

//     constructor(private loginService: LoginService) { }

//     intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        
//         let token = this.loginService.getToken();


//         console.log("Intercepter is:",token);

//         if (token != null) {
//             req = req.clone({
//               setHeaders: {Authorization: `Bearer ${token}`
//               }
//             });
//           }
//           console.log("Authorization Header:", req.headers.get('Authorization'));
        
//         return next.handle(req);        


//     }


// }