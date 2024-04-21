import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoicesDashboardComponent } from "src/app/components/invoices-dashboard/invoices-dashboard.component";
import { RouterModule } from '@angular/router';
import { InvoicesDashboardRoutingModule } from "src/app/components/invoices-dashboard/invoices-dashboard.routing.module";
import { InvoicesListComponent } from "src/app/components/invoices-list/invoices-list.component";

@NgModule({
  declarations: [
    InvoicesDashboardComponent,
    InvoicesListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    InvoicesDashboardRoutingModule
  ],
  providers: [],
})
export class InvoicesDashboardModule { }
