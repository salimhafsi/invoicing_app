import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoicesDashboardComponent } from "src/app/components/invoices-dashboard/invoices-dashboard.component";
import { RouterModule } from '@angular/router';
import { InvoicesDashboardRoutingModule } from "src/app/components/invoices-dashboard/invoices-dashboard.routing.module";
import { InvoicesListComponent } from "src/app/components/invoices-dashboard/invoices-list/invoices-list.component";
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from "primeng/api";
import { ConfirmDialogComponent } from "src/app/components/confirm-dialog/confirm-dialog.component";
import { CreateInvoiceComponent } from "src/app/components/invoices-dashboard/create-invoice/create-invoice.component";
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [
    InvoicesDashboardComponent,
    InvoicesListComponent,
    CreateInvoiceComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    InvoicesDashboardRoutingModule,
    TableModule,
    DialogModule,
    ConfirmDialogComponent,
  ],
  providers: [ConfirmationService],
})
export class InvoicesDashboardModule { }
