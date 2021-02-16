import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import {HttpClient} from "@angular/common/http";
declare var $:any;
@Component({
  selector: 'app-soporte-admin',
  templateUrl: './soporte-admin.component.html',
  styleUrls: ['./soporte-admin.component.css']
})
export class SoporteAdminComponent implements OnInit {
  dtOptions: DataTables.Settings = {};

  dtTrigger: Subject<any> = new Subject<any>();
  data:any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      language: {
        url : '//cdn.datatables.net/plug-ins/1.10.22/i18n/Spanish.json'
      }
    };
    this.http.get("http://dummy.restapiexample.com/api/v1/employees").subscribe((res:any)=> {
      this.data = res.data;
      this.dtTrigger.next();
    });  
  }
  OnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
