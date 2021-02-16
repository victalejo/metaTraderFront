import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import {global} from "../../services/global";
import {UserService}from "../../services/user.service";
import{NotificationsService } from 'angular2-notifications';
import {User} from "../../models/users";
import { DataTableDirective } from 'angular-datatables';
declare var $:any;
@Component({
  selector: 'app-usuarios-admin',
  templateUrl: './usuarios-admin.component.html',
  styleUrls: ['./usuarios-admin.component.css'],
  providers: [UserService]
})
export class UsuariosAdminComponent implements OnInit {
  public isDtInitialized:boolean = false
  public loadEnabled;
  public loadDisabled;
  dtOptions: DataTables.Settings = {};
  public url;
  public token;
  public user: User;
  public dtElement: DataTableDirective;
  dtTrigger: Subject<any> = new Subject<any>();
  data:any;
  email = "";
  image = "";
  name = "";
  constructor(
    private _userService : UserService,
    private _serviceNotificacion: NotificationsService,
  ) { 
    this.url  = global.url;
    this.user = new User("","",null,"","","","","","","","","","");
  }
  someClickHandler(info: any): void {
    this.user.email = info[1];
  }
  completeTable(){
    this._userService.getAllUsersAdmin().subscribe(
      response => {
        this.data = response.data;
        if (this.isDtInitialized) {
          this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
            dtInstance.destroy();
            this.dtTrigger.next();
          })
        }else{
          this.isDtInitialized = true
          this.dtTrigger.next();       
        }

      },
      error => {
      }
    )
  }
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      language: {
        url : '//cdn.datatables.net/plug-ins/1.10.22/i18n/Spanish.json'
      },
      rowCallback: (row: Node, data: any[] | Object, index: number) => {
        const self = this;
        $('td', row).off('click');
        $('td', row).on('click', () => {
          self.someClickHandler(data);
        });
        return row;
      }
    };
    this.completeTable()

  }
  OnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
  notifacionSuccess(message){
    this._serviceNotificacion.success("Cambio de Estado" , message, {
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
  disabledUser(email){
    this.loadDisabled = true;
    this.user.email = email;
    this._userService.disabledUser(this.user).subscribe(
      response => {
        this.notifacionSuccess(response.message);
        this.loadDisabled = false;
        this.completeTable();
        
      },
      error => {
        this.notifacionError(error.error.message);
        this.loadDisabled = false;
      }
    )
  }
  enabledUser(email){
    this.user.email = email;
    this.loadEnabled = true;
    this._userService.enabledUser(this.user).subscribe(
      response => {
        this.notifacionSuccess(response.message);
        this.loadEnabled = false;
        this.completeTable();
      },
      error => {
        this.notifacionError(error.error.message);
        this.loadEnabled = false;
      }
    )
  }
}
