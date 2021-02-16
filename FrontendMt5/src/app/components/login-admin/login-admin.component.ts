import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../models/users";
import { CookieService } from 'ngx-cookie-service';
import {Router, ActivatedRoute, Params} from "@angular/router";
declare var $:any;
@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css'],
  providers:[UserService]
})
export class LoginAdminComponent implements OnInit {
  public user: User;
  public statusLogin = true;
  public loadingLogin;
  public mesageLogin= "";
  
  constructor(
    private _userService: UserService,
    private cookieService: CookieService,
    private _router: Router,
  ) {
    this.user = new User("","",null,"","","","","","","","","","");
   }


  ngOnInit(): void {

    $('#login-button').click(function(){
      $('#login-button').fadeOut("slow",function(){
        $("#container").fadeIn();
      });
    });
    
    $(".close-btn").click(function(){

      $("#container, #forgotten-container").fadeOut(800, function(){
        $("#login-button").fadeIn(800);
      });
    });
    
    /* Forgotten Password */
    $('#forgotten').click(function(){
      $("#container").fadeOut(function(){
        $("#forgotten-container").fadeIn();
      });
    });
  }
  onSubmitLogin(form){
    this.loadingLogin = true;
      this._userService.loginUserAdmin(this.user).subscribe(
        response => {
          this.loadingLogin = false;
          this.statusLogin = false;
          this._userService.setToken(response.token);
          this._router.navigate(["/dashboard-admin"]);
        },
        error => {
          this.loadingLogin = false;
          this.statusLogin = false;
          this.mesageLogin = error.error.message;
        }
      ); 
  }

}
