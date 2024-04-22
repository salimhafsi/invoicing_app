import { Component, OnInit } from '@angular/core';
import { InvoicesService } from "src/app/services/invoices.service";
import { InvoiceModel } from "src/app/models/invoice.model";
import { Observable } from 'rxjs';
import { ConfirmationService } from "primeng/api";
import { confirmDialogConstant } from "src/app/constants/confirm-dialog-constant";
import { ConfirmDialogComponent } from "src/app/components/confirm-dialog/confirm-dialog.component";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: 'invoices-list',
  templateUrl: './invoices-list.component.html',
  styleUrls: ['./invoices-list.component.scss']
})
export class InvoicesListComponent implements OnInit {
  invoices$: Observable<InvoiceModel[]>
  userRole: string
  visible = false
  invoiceToUpdate: InvoiceModel
  constructor(private invoicesService: InvoicesService,
    private confirmationService: ConfirmationService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.loadInvoices();
    this.getUserRole();
  }
  getUserRole() {
    this.userRole = this.userService.getUserInformations().userRole
  }
  loadInvoices() {
    this.invoices$ = this.invoicesService.getInvoicesList()
  }
  openCreateInvoiceModal() {
    this.visible = true;
  };
  openUpdateInvoiceModal(invoice: InvoiceModel) {
    this.invoiceToUpdate = invoice;
    this.visible = true;
  }
  createInvoice(invoice: InvoiceModel) {
    this.invoicesService.addInvoice(invoice).subscribe(() => {
      this.loadInvoices();
      this.visible = false;
    });
  };
  updateInvoice(invoice: InvoiceModel) {
    this.invoicesService.updateInvoice(invoice).subscribe(() => {
      this.loadInvoices();
      this.visible = false;
    });
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
          this.loadInvoices();
        });
      }
    })
  }
}
