import { Routes } from '@angular/router';
import { MostrarLibrarianComponent } from './components/librarian/mostrar-librarian/mostrar-librarian.component';
import { CrearLibrarianComponent } from './components/librarian/crear-librarian/crear-librarian.component';
import { ActualizarLibrarianComponent } from './components/librarian/actualizar-librarian/actualizar-librarian.component';
import { MostrarLoanComponent } from './components/loan/mostrar-loan/mostrar-loan.component';
import { CrearLoanComponent } from './components/loan/crear-loan/crear-loan.component';
import { ActualizarLoanComponent } from './components/loan/actualizar-loan/actualizar-loan.component';
import { MostrarPenaltyComponent } from './components/penalty/mostrar-penalty/mostrar-penalty.component';
import { CrearPenaltyComponent } from './components/penalty/crear-penalty/crear-penalty.component';
import { ActualizarPenaltyComponent } from './components/penalty/actualizar-penalty/actualizar-penalty.component';
import { MostrarResourceTypeComponent } from './components/resourceType/mostrar-resource-type/mostrar-resource-type.component';
import { CrearResourceTypeComponent } from './components/resourceType/crear-resource-type/crear-resource-type.component';
import { ActualizarResourceTypeComponent } from './components/resourceType/actualizar-resource-type/actualizar-resource-type.component';
import { MostrarResourceComponent } from './components/resource/mostrar-resource/mostrar-resource.component';
import { CrearResourceComponent } from './components/resource/crear-resource/crear-resource.component';
import { ActualizarResourceComponent } from './components/resource/actualizar-resource/actualizar-resource.component';
import { MostrarUserTypeComponent } from './components/userType/mostrar-user-type/mostrar-user-type.component';
import { CrearUserTypeComponent } from './components/userType/crear-user-type/crear-user-type.component';
import { ActualizarUserTypeComponent } from './components/userType/actualizar-user-type/actualizar-user-type.component';
import { MostrarUserComponent } from './components/user/mostrar-user/mostrar-user.component';
import { CrearUserComponent } from './components/user/crear-user/crear-user.component';
import { ActualizarUserComponent } from './components/user/actualizar-user/actualizar-user.component';
import { MostrarReturnRecordComponent } from './components/returnRecord/mostrar-return-record/mostrar-return-record.component';
import { CrearReturnRecordComponent } from './components/returnRecord/crear-return-record/crear-return-record.component';
import { ActualizarReturnRecordComponent } from './components/returnRecord/actualizar-return-record/actualizar-return-record.component';

export const routes: Routes = [
    { 
        path: '', 
        redirectTo: '/', 
        pathMatch: 'full' 
    },
    {
        path: "librarians",
        component: MostrarLibrarianComponent
    },
    {
        path: "librarians/nuevo",
        component: CrearLibrarianComponent
    },
    {
        path: "librarians/edit/:id",
        component: ActualizarLibrarianComponent
    },
    {
        path: "loans",
        component: MostrarLoanComponent
    },
    {
        path: "loans/nuevo",
        component: CrearLoanComponent
    },
    {
        path: "loans/edit/:id",
        component: ActualizarLoanComponent
    },
    {
        path: "penalties",
        component: MostrarPenaltyComponent
    },
    {
        path: "penalties/nuevo",
        component: CrearPenaltyComponent
    },
    {
        path: "penalties/edit/:id",
        component: ActualizarPenaltyComponent
    },
    {
        path: "resourceTypes",
        component: MostrarResourceTypeComponent
    },
    {
        path: "resourceTypes/nuevo",
        component: CrearResourceTypeComponent
    },
    {
        path: "resourceTypes/edit/:id",
        component: ActualizarResourceTypeComponent
    },
    {
        path: "resources",
        component: MostrarResourceComponent
    },
    {
        path: "resources/nuevo",
        component: CrearResourceComponent
    },
    {
        path: "resources/edit/:id",
        component: ActualizarResourceComponent
    },
    {
        path: "userTypes",
        component: MostrarUserTypeComponent
    },
    {
        path: "userTypes/nuevo",
        component: CrearUserTypeComponent
    },
    {
        path: "userTypes/edit/:id",
        component: ActualizarUserTypeComponent
    },
    {
        path: "users",
        component: MostrarUserComponent
    },
    {
        path: "users/nuevo",
        component: CrearUserComponent
    },
    {
        path: "users/edit/:id",
        component: ActualizarUserComponent
    },
    {
        path: "returnRecords",
        component: MostrarReturnRecordComponent
    },
    {
        path: "returnRecords/nuevo",
        component: CrearReturnRecordComponent
    },
    {
        path: "returnRecords/edit/:id",
        component: ActualizarReturnRecordComponent
    },
];
