import { Component, OnInit } from '@angular/core';
import { InvoicesService } from "src/app/services/invoices.service";
import { InvoiceModel } from "src/app/models/invoice.model";
import { Observable } from 'rxjs';

@Component({
  selector: 'invoices-list',
  templateUrl: './invoices-list.component.html',
  styleUrls: ['./invoices-list.component.scss']
})
export class InvoicesListComponent implements OnInit {
  invoices$: Observable<InvoiceModel[]>
  constructor(private invoicesService: InvoicesService) { }

  ngOnInit(): void {
    this.invoices$ = this.invoicesService.getInvoicesList()
  }
}
