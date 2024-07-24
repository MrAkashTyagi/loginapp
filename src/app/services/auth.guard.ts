import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from './login.service';


export const authGuard: CanActivateFn = (route, state) => {
  

  const loginService:any = inject(LoginService);
  const router = inject(Router)

  if(loginService.isLoggedIn()){
    return true;
  }else
  //redirect to login page if not logegd in
  router.navigate(['/login'])

  return false;
};


// import { Injectable } from '@angular/core';
// import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
// import { LoginService } from './login.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate {

//   constructor(private loginService: LoginService, private router: Router) {}

//   canActivate(
//     next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): boolean {
    
//     if (this.loginService.isLoggedIn()) {
//       return true; // Allow navigation
//     } else {
//       // Redirect to login page or any other route
//       this.router.navigate(['/login']);
//       return false; // Prevent navigation
//     }
//   }
// }



