import { Component, OnInit } from '@angular/core';
import {EpaycoService} from "../../services/epayco.service";
declare var $:any;
@Component({
  selector: 'app-response-epayco',
  templateUrl: './response-epayco.component.html',
  styleUrls: ['./response-epayco.component.css'],
  providers:[EpaycoService]
})
export class ResponseEpaycoComponent implements OnInit {

  constructor(
    private _epaycoService : EpaycoService,
  ) { }

  ngOnInit(): void {

    var ref_payco = this.getQueryParam('ref_payco');
    //Url Rest Metodo get, se pasa la llave y la ref_payco como paremetro
    var urlapp = "https://secure.epayco.co/validation/v1/reference/" + ref_payco;
    $.get(urlapp, function(response) {

      if (response.success) {

        if (response.data.x_cod_response == 1) {
          //Codigo personalizado
          console.log("Transaccion Aprobada");

        }
        //Transaccion Rechazada
        if (response.data.x_cod_response == 2) {
          console.log("Transaccion rechazada");
        }
        //Transaccion Pendiente
        if (response.data.x_cod_response == 3) {
          console.log("Transaccion pendiente");
        }
        //Transaccion Fallida
        if (response.data.x_cod_response == 4) {
          console.log("Transaccion fallida");
        }

        $('#fecha').html(response.data.x_transaction_date);
        $('#respuesta').html(response.data.x_response);
        $('#referencia').text(response.data.x_id_invoice);
        $('#motivo').text(response.data.x_response_reason_text);
        $('#recibo').text(response.data.x_transaction_id);
        $('#banco').text(response.data.x_bank_name);
        $('#autorizacion').text(response.data.x_approval_code);
        $('#total').text(response.data.x_amount + ' ' + response.data.x_currency_code);


      } else {
        console.log("Error consultando la información");
      }
    });



  }
  getQueryParam(param) {
    location.search.substr(1)
      .split("&")
      .some(function(item) { // returns first occurence and stops
        return item.split("=")[0] == param && (param = item.split("=")[1])
      })
    return param
  }



  
}
