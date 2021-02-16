//Imports necerario para funcionamiento
import { ModuleWithProviders } from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

//IMPORTAR COMPONENTES
import {HomeComponent} from "./components/home/home.component";
import {PaymentComponent} from "./components/payment/payment.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {ResponseEpaycoComponent} from "./components/response-epayco/response-epayco.component";
import {SoporteComponent} from "./components/soporte/soporte.component";
import {GestionRiesgosComponent} from "./components/gestion-riesgos/gestion-riesgos.component";
import {CalificarComponent} from "./components/calificar/calificar.component";
import {UpdateUserComponent} from "./components/update-user/update-user.component";
import {DetailTicketUserComponent} from "./components/detail-ticket-user/detail-ticket-user.component";
import {AuthGuard} from "./shared/guards/auth.guard";
import {AuthPayments} from "./shared/payments/auth.guard";
import {AdminGuard} from "./shared/dashboard-admin/admin.guard";
import {LoginAdminGuard} from "./shared/login-admin/login-admin.guard";

//Componentes parte administrativa
import {LoginAdminComponent} from "./components/login-admin/login-admin.component";
import {DashboardAdminComponent} from "./components/dashboard-admin/dashboard-admin.component";
import {SoporteAdminComponent} from "./components/soporte-admin/soporte-admin.component";
import {ComprobantesAdminComponent} from "./components/comprobantes-admin/comprobantes-admin.component";
import {UsuariosAdminComponent} from "./components/usuarios-admin/usuarios-admin.component";
import {DetailtTicketAdminComponent} from "./components/detailt-ticket-admin/detailt-ticket-admin.component";
// Definir la rutas
const appRoutes: Routes = [
    {path:  "", component: HomeComponent},
    {path:  "home", component: HomeComponent },
    {path:  "payments", component: PaymentComponent, canActivate:[AuthPayments] },
    {path:  "dashboard", component: DashboardComponent , canActivate:[AuthGuard] ,
        children : [
            {path : "", component: UpdateUserComponent },
            {path : "configurar", component: UpdateUserComponent }

        ]
    },
    {path:  "response", component: ResponseEpaycoComponent},
    {path:  "adminIniciarSesionGreat", component: LoginAdminComponent , canActivate:[LoginAdminGuard]},
    {path:  "dashboard-admin", component: DashboardAdminComponent, canActivate:[AdminGuard],
    children : [
        {path : "", component: UsuariosAdminComponent },
        {path : "usuarios", component: UsuariosAdminComponent },
    ]},
    {path:  "**", component: HomeComponent},
];
// Exportar configuracion
export const appRoutinProviders : any[] = [];
export const routing : ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);