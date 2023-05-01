import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProtectedVerifyResetCodeGuard implements CanActivate {

  constructor(private _Router:Router) {};

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if(localStorage.getItem("isSendCode") == "true") {

        return true;

      } else {

        this._Router.navigate(["/login"]);
        return false;

      };


  }
  
}
