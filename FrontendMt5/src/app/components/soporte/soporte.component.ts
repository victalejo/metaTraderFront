import { Component,  OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import {HttpClient} from "@angular/common/http";
declare var $:any;
@Component({
  selector: 'app-soporte',
  templateUrl: './soporte.component.html',
  styleUrls: ['./soporte.component.css']
})
export class SoporteComponent implements OnInit {
  dtOptions: DataTables.Settings = {};

  dtTrigger: Subject<any> = new Subject<any>();
  data:any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    $(".custom-file-input").on("change", function() {
  
      var fileName = $(this).val().split("\\").pop();
      $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
      
    });
    
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
