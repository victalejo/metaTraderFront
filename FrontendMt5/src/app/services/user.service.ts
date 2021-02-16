import {Injectable} from    "@angular/core";
import  {HttpClient, HttpHeaders} from  "@angular/common/http";
import  {Observable, from}    from    "rxjs";
import  {User}  from    "../models/users";
import {global} from "./global"
import { CookieService } from 'ngx-cookie-service';
@Injectable()

export class UserService{
    public url: string;
	public token;
    constructor(
        public _http:HttpClient,
		private cookieService: CookieService 
    ){
        this.url = global.url;
    }
    
	userRegister(user: User): Observable<any>{
		let params = JSON.stringify(user);
		let headers = new HttpHeaders().set('Content-Type','application/json');

		return this._http.post(this.url+'userRegister', params, {headers: headers, withCredentials:true});
	}
	loginUser(user: User): Observable<any>{
		let params = JSON.stringify(user);
		let headers = new HttpHeaders().set('Content-Type','application/json');

		return this._http.post(this.url+'userLogin', params, {headers: headers, withCredentials:true});
	}
	loginUserAdmin(user: User): Observable<any>{
		let params = JSON.stringify(user);
		let headers = new HttpHeaders().set('Content-Type','application/json');

		return this._http.post(this.url+'user/login/', params, {headers: headers, withCredentials:true});
	}
    getUser() : Observable<any>{       
        let headers = new HttpHeaders().set("Authorization", "Bearer "+ this.getToken());
		let userSignin =  JSON.parse(atob(this.getToken().split(".")[1]));
        return this._http.get(this.url+"getUser/"+userSignin.id,{headers: headers,  withCredentials:true});
    }  

	updateUser(user: User): Observable<any>{
		let params = JSON.stringify(user);
		let headers = new HttpHeaders().set('Content-Type','application/json').set("Authorization", "Bearer "+ this.getToken());
		let userSignin =  JSON.parse(atob(this.getToken().split(".")[1]));
		return this._http.put(this.url+'updateUser/'+userSignin.id, params, {headers: headers, withCredentials:true});
	}

	updateMt(user: User): Observable<any>{
		let params = JSON.stringify(user);
		let headers = new HttpHeaders().set('Content-Type','application/json').set("Authorization", "Bearer "+ this.getToken());
		let userSignin =  JSON.parse(atob(this.getToken().split(".")[1]));
		return this._http.put(this.url+'update/data/userMT/'+userSignin.id, params, {headers: headers, withCredentials:true});
	}	

	updateUserData(user: User): Observable<any>{
		let params = JSON.stringify(user);
		let headers = new HttpHeaders().set('Content-Type','application/json').set("Authorization", "Bearer "+ this.getToken());
		let userSignin =  JSON.parse(atob(this.getToken().split(".")[1]));
		return this._http.put(this.url+'update/data/user/'+userSignin.id, params, {headers: headers, withCredentials:true});
	}		

	updateImagen(formU): Observable<any>{
		const form = new FormData(formU);
		let headers = new HttpHeaders().set("Authorization", "Bearer "+ this.getToken());
		let userSignin =  JSON.parse(atob(this.getToken().split(".")[1]));
		return this._http.put(this.url+'update/Img/'+userSignin.id, form, {headers: headers, withCredentials:true});
	}	

	deleteImagen(user:User): Observable<any>{
		let params = JSON.stringify(user);
		let headers = new HttpHeaders().set("Authorization", "Bearer "+ this.getToken());
		let userSignin =  JSON.parse(atob(this.getToken().split(".")[1]));
		return this._http.delete(this.url+'deleteImg/'+userSignin.id,  {headers: headers, withCredentials:true});
	}

	getAllUsersAdmin(): Observable<any>{
        let headers = new HttpHeaders().set("Authorization", "Bearer "+ this.getToken());
        return this._http.get(this.url+"page/manage/users", {headers: headers,  withCredentials:true});		
	}
	disabledUser(user:User): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/json').set("Authorization", "Bearer "+ this.getToken());
		let params = JSON.stringify(user);
        return this._http.put(this.url+"deactivateUser", params, {headers: headers,  withCredentials:true});		
	}
	enabledUser(user:User): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/json').set("Authorization", "Bearer "+ this.getToken());
		let params = JSON.stringify(user);
        return this._http.put(this.url+"activateUser", params, {headers: headers,  withCredentials:true});		
	}
	logoutUser(){
		let headers = new HttpHeaders().set('Content-Type','application/json').set("Authorization", "Bearer "+ this.getToken());
		return this._http.delete(this.url+'logoutUser', {headers: headers, withCredentials:true});
	}
	setToken(token:string){
		this.cookieService.set("token", token,24)
	}
	getToken(){
		return this.cookieService.get("token")
	}
}