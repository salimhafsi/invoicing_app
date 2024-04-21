import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoicesDashboardComponent } from "src/app/components/invoices-dashboard/invoices-dashboard.component";
import { LoginComponent } from "src/app/components/login/login.component";
import { AuthenticationService } from "src/app/services/authentication.service";
import { AuthenticationGuard } from "src/app/guard/authentication.guard";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/invoices-dashboard/invoices-dashboard.module').then(m => m.InvoicesDashboardModule),
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
