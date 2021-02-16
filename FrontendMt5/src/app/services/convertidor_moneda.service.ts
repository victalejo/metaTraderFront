import {Injectable} from    "@angular/core";
import  {HttpClient, HttpHeaders} from  "@angular/common/http";
import  {Observable, from}    from    "rxjs";


@Injectable()

export class MonedaService{
    public url: string;

    constructor(
        public _http:HttpClient
    ){

    }
    
	getMoneda(): Observable<any>{
       /*let json = JSON.stringify("");
        let params = "json=" + json;
        let headers = new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded");
        return this._http.post("https://api.cambio.today/v1/quotes/USD/COP/json?quantity=50&key=7559|nKuB4wbgqC3FdpkzR*EPsGiG7aPQHxmJ", params,{headers: headers});*/
        return this._http.get('http://api.cambio.today/v1/quotes/USD/COP/json?quantity=50&key=7559|nKuB4wbgqC3FdpkzR*EPsGiG7aPQHxmJ');

	}
}