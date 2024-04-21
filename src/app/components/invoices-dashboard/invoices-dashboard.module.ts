import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoicesDashboardComponent } from "src/app/components/invoices-dashboard/invoices-dashboard.component";
import { RouterModule } from '@angular/router';
import { InvoicesDashboardRoutingModule } from "src/app/components/invoices-dashboard/invoices-dashboard.routing.module";
import { InvoicesListComponent } from "src/app/components/invoices-dashboard/invoices-list/invoices-list.component";
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    InvoicesDashboardComponent,
    InvoicesListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    InvoicesDashboardRoutingModule,
    TableModule,
  ],
  providers: [],
})
export class InvoicesDashboardModule { }
