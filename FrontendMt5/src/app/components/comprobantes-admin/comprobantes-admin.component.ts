import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

declare var $:any;
@Component({
  selector: 'app-comprobantes-admin',
  templateUrl: './comprobantes-admin.component.html',
  styleUrls: ['./comprobantes-admin.component.css'],

})
export class ComprobantesAdminComponent implements OnInit {
  dtOptions: DataTables.Settings = {};

  dtTrigger: Subject<any> = new Subject<any>();
  data:any;
  email = "";
  image = "";
  name = "";

  constructor(

  ) { }
  someClickHandler(info: any): void {
    this.email = info.employee_age;
    this.name = info.employee_name;
    this.image = info.profile_image;
  }

  ngOnInit(): void {
    this.dtOptions = {
      language: {
        url : '//cdn.datatables.net/plug-ins/1.10.22/i18n/Spanish.json'
      },
      ajax: 'http://dummy.restapiexample.com/api/v1/employees',
      columns: [{
        title: 'No',
        data: 'id'
      }, {
        title: 'Nombres',
        data: 'employee_name'
      }, {
        title: 'Correo',
        data: 'employee_age'
      }, {
        title: 'Telefono',
        data: 'employee_salary'
      }, {
        title: 'Estado',
        data: 'employee_name'
      }
      , {
        title: 'Soporte',
        render: function (data: any, type: any, full: any) {
          return '<img data-toggle="modal" data-target="#viewComprobante" class="img-fluid cursor-pointer"  width="150" heigth="150" src="../../../assets/images/contact.jpg">';
        }
      }, {
        title: 'Acción',
        render: function (data: any, type: any, full: any) {
          return '<button class="btn btn-success m-1"><i class="fas fa-check-circle"></i></button><button data-toggle="modal" data-target="#notAprobed" class="btn btn-danger m-1"><i class="fas fa-times-circle"></i></button>';
        }
      }],
      rowCallback: (row: Node, data: any[] | Object, index: number) => {
        const self = this;
        $('td', row).off('click');
        $('td', row).on('click', () => {
          self.someClickHandler(data);
        });
        return row;
      }
    };
  }

}
