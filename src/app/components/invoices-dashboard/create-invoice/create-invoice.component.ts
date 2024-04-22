import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { PAYMENTTYPS, PAYMENTSTATUS } from "src/app/constants/invoice.constant";
import { InvoiceModel } from "src/app/models/invoice.model";
const { v1: uuidv1 } = require('uuid');

@Component({
  selector: 'create-invoice',
  templateUrl: './create-invoice.component.html',
  styleUrls: ['./create-invoice.component.scss']
})
export class CreateInvoiceComponent implements OnInit {
  enableUpdateBtn = false
  @Input() set invoiceToUpdate(invoice: InvoiceModel) {
    invoice ? this.enableUpdateBtn = true : this.enableUpdateBtn = false
    this.initInvoiceForm(invoice)
  }
  @Output() createInvoiceAction = new EventEmitter<InvoiceModel>();
  @Output() updateInvoiceAction = new EventEmitter<InvoiceModel>();

  invoiceForm: FormGroup;
  paymentTypeOptions = PAYMENTTYPS;
  paymentStatusOptions = PAYMENTSTATUS;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initInvoiceForm()
  }
  initInvoiceForm(invoice?: InvoiceModel) {
    if (invoice) {
      this.invoiceForm.patchValue(invoice)
    }
    else {
      this.invoiceForm = this.formBuilder.group({
        id: [''],
        item: ['', Validators.required],
        quantity: ['', Validators.required],
        price: ['', [Validators.required]],
        paymentStatus: [null, Validators.required],
        paymentType: [null, Validators.required]
      });
    }

  }
  createInvoice() {
    this.invoiceForm.value['id'] = uuidv1()
    this.createInvoiceAction.emit(this.invoiceForm.value);
    this.initInvoiceForm(null)
  }
  updateInvoice() {
    this.updateInvoiceAction.emit(this.invoiceForm.value);
    this.initInvoiceForm(null)
  }
}
