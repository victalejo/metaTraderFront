import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {UserService} from "../../services/user.service";
import { CookieService } from 'ngx-cookie-service';
@Injectable()
export class AuthPayments implements CanActivate {
  public userSignin;
  constructor(
    private _userService: UserService,
    private _router: Router,
    private cookieService: CookieService,
	){}
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    if(this.cookieService.check("connect.sid") && this.cookieService.check("token")){
      this.userSignin = JSON.parse(atob(this._userService.getToken().split(".")[1]));
      if(this.userSignin.activo == "false"){
        return true;
      }else{
        this._router.navigate(["/dashboard"]);
        return false;
      }
    }else{
      this._router.navigate(["/home"]);
      return false;
    }
  }
  
}
