import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../models/users";
import { CookieService } from 'ngx-cookie-service';
import {Router, ActivatedRoute, Params} from "@angular/router";
@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css'],
  providers:[UserService]
})
export class DashboardAdminComponent implements OnInit {

  constructor(
    private _userService: UserService,
    private cookieService: CookieService,
    private _router: Router,
  ) { }

  ngOnInit(): void {
  }
  logout(){
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
