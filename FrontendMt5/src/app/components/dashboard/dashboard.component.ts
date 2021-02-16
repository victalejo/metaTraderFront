import { Component, OnInit, DoCheck} from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import {UserService} from "../../services/user.service";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {User} from "../../models/users";
import {global} from "../../services/global"
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[UserService]
})
export class DashboardComponent implements OnInit , DoCheck {
  public user: User;
  public url: string;
  public signin = true;
  constructor(
    private cookieService: CookieService,
    private _userService: UserService,
    private _router: Router,
    
  ) {
    this.user = new User("","",null,"","","","","","","","","","");
    this.url = global.getImages
   }
  loadUser(){
    if(this.cookieService.check("token") && this.cookieService.check("connect.sid") && this.signin){
      this._userService.getUser().subscribe(
        response => {
          this.user.avatar = response.user.avatar;
          
        },
        error=> {
        
        }
      ) 
    }else{
      this._router.navigate(["/home"]);
    }
  }
   ngDoCheck() {

  }
  ngOnInit(): void {
      this.loadUser();
    window.addEventListener("load", function(){
      var forms = document.getElementsByClassName("needs-validation");
      var validation = Array.prototype.filter.call(forms, function(form){
        form.addEventListener("submit", function(event){
          if(form.checkValidity()== false){
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add("was-validated");
  
          event.preventDefault();
        },false)
      })
    }, false) 
  
  }

  logout(){
    this.signin = false;
    this._userService.logoutUser().subscribe(
      response => {
        
        this.cookieService.deleteAll();
        this._router.navigate(["home"]);
        
      },
      error => {
      }
    )
  }
}
