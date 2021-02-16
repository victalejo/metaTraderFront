import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  {FormsModule} from  "@angular/forms";
import  {HttpClientModule}  from  "@angular/common/http";
import {routing ,appRoutinProviders} from "./app.ruting";
import { CookieService } from 'ngx-cookie-service';
import {UserService} from "./services/user.service";
import { AuthGuard } from './shared/guards/auth.guard';
import {AuthPayments} from "./shared/payments/auth.guard";
import { SimpleNotificationsModule } from 'angular2-notifications';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import {HomeComponent} from './components/home/home.component';
import { PaymentComponent } from './components/payment/payment.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ResponseEpaycoComponent } from './components/response-epayco/response-epayco.component';
import { GestionRiesgosComponent } from './components/gestion-riesgos/gestion-riesgos.component';
import { SoporteComponent } from './components/soporte/soporte.component';
import { CalificarComponent } from './components/calificar/calificar.component';
import { UpdateUserComponent } from './components/update-user/update-user.component'
import { DataTablesModule } from "angular-datatables";
import { DetailTicketUserComponent } from './components/detail-ticket-user/detail-ticket-user.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import { SoporteAdminComponent } from './components/soporte-admin/soporte-admin.component';
import { UsuariosAdminComponent } from './components/usuarios-admin/usuarios-admin.component';
import { ComprobantesAdminComponent } from './components/comprobantes-admin/comprobantes-admin.component';
import { DetailtTicketAdminComponent } from './components/detailt-ticket-admin/detailt-ticket-admin.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PaymentComponent,
    DashboardComponent,
    ResponseEpaycoComponent,
    GestionRiesgosComponent,
    SoporteComponent,
    CalificarComponent,
    UpdateUserComponent,
    DetailTicketUserComponent,
    LoginAdminComponent,
    DashboardAdminComponent,
    SoporteAdminComponent,
    UsuariosAdminComponent,
    ComprobantesAdminComponent,
    DetailtTicketAdminComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    NgbModule,
    DataTablesModule,
    BrowserAnimationsModule, 
    SimpleNotificationsModule.forRoot()
  ],
  providers: [
    appRoutinProviders,
    CookieService,
    AuthGuard,
    UserService,
    AuthPayments
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
