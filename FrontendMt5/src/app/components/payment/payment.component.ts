import { Component, OnInit } from '@angular/core';
import {Payment} from '../../models/payment'
import {UserService} from '../../services/user.service'
import {EpaycoService} from '../../services/epayco.service'
import {Router, ActivatedRoute, Params} from "@angular/router";
import{NotificationsService } from 'angular2-notifications';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
  providers:[ UserService, EpaycoService]
})
export class PaymentComponent implements OnInit {
  public valor:number;
  public valorBase:number;
  public payment:Payment;
  public loadingPayment;
  public statusPayment;
  public messagePayment;
  constructor(
    private _userService:UserService,
    private _epaycoService:EpaycoService,
    private _router: Router,
    private _serviceNotificacion: NotificationsService,
    private cookieService: CookieService,
  ) {
    this.payment = new Payment(null,null,null,null,null,null,"CC",null)
   }

  ngOnInit(): void {
    console.log(JSON.parse(atob(this._userService.getToken().split(".")[1])))
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
    this._userService.logoutUser().subscribe(
      response => {
        this.cookieService.deleteAll();
        this._router.navigate(["home"]);
      },
      error => {

      }
    )
  }
  notifacionSuccess(message){
    this._serviceNotificacion.success("Pago Realizado" , message, {
      position : ["bottom", "right"],
      timeOut : 2000,
    });
   }
   notifacionError(message){
     this._serviceNotificacion.error("Fallo" , message, {
       position : ["bottom", "right"],
       timeOut : 2000,
     });
    }
  onSubmitPayment(form){
    this.loadingPayment = true;
    this._epaycoService.registerPayment(this.payment).subscribe(
      response => {
        this.loadingPayment = false;
        this.messagePayment = response.message;
        if(response.ok){
          console.log(response)
          this.statusPayment = true;
          this._userService.setToken(response.token)
          this._router.navigate(["/dashboard"])
          this.notifacionSuccess(this.messagePayment)
        }else{
          this.statusPayment = false;
          this.notifacionError(this.messagePayment)
        }
        
      },
      error => {
        this.loadingPayment = false;
        this.statusPayment = false;
        this.messagePayment = error.error.message;
        this.notifacionError(this.messagePayment)
      }
    )
  }
}
