import {Injectable} from    "@angular/core";
import  {HttpClient, HttpHeaders} from  "@angular/common/http";
import  {Observable, from}    from    "rxjs";
import {global} from "./global"
import  {Payment}  from    "../models/payment";
import {UserService} from './user.service'
@Injectable()

export class EpaycoService{
    public url: string;

    constructor(
        public _http:HttpClient,
        private _userService : UserService
    ){
        this.url = global.url;
    }
    
	registerPayment(payment: Payment): Observable<any>{
		let params = JSON.stringify(payment);
		let headers = new HttpHeaders().set('Content-Type','application/json').set("Authorization", "Bearer "+ this._userService.getToken());

		return this._http.post(this.url+'user/payment/membership', params, {headers: headers, withCredentials:true});
	}
}