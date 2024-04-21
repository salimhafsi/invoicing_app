import { Component, OnInit } from '@angular/core';
import { InvoicesService } from "src/app/services/invoices.service";
import { InvoiceModel } from "src/app/models/invoice.model";
import { Observable } from 'rxjs';
import { ConfirmationService } from "primeng/api";
import { confirmDialogConstant } from "src/app/constants/confirm-dialog-constant";
import { ConfirmDialogComponent } from "src/app/components/confirm-dialog/confirm-dialog.component";

@Component({
  selector: 'invoices-list',
  templateUrl: './invoices-list.component.html',
  styleUrls: ['./invoices-list.component.scss']
})
export class InvoicesListComponent implements OnInit {
  invoices$: Observable<InvoiceModel[]>
  visible = false
  constructor(private invoicesService: InvoicesService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.loadInvoices()
  }
  loadInvoices() {
    this.invoices$ = this.invoicesService.getInvoicesList()
  }
  createInvoice() {
    this.visible = true
    // const newProduct = {
    //   id: '125',
    //   item: 'New a',
    //   quantity: 99.99,
    //   price: 85,
    //   paymentStatus: 'dg',
    //   paymentType: 'ffg'
    // };
    // this.invoicesService.addInvoice(newProduct).subscribe(() => {
    //   // Refresh the list after creating
    //   this.loadInvoices();
    // });
  }
  deleteInvoice(invoice: InvoiceModel) {
    this.confirmationService.confirm({
      header: confirmDialogConstant.header,
      message: confirmDialogConstant.message,
      acceptIcon: confirmDialogConstant.acceptIcon,
      rejectIcon: confirmDialogConstant.rejectIcon,
      rejectButtonStyleClass: confirmDialogConstant.rejectButtonStyleClass,
      acceptButtonStyleClass: confirmDialogConstant.acceptButtonStyleClass,
      accept: () => {
        this.invoicesService.deleteInvoice(invoice.id).subscribe(() => {
          // Refresh the list after deletion
          this.loadInvoices();
        });
      }
    })

  }
}
