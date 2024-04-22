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
  @Input() set invoiceToUpdate(invoice: InvoiceModel) {
    this.initInvoiceForm(invoice)
  }
  @Output() createInvoiceAction = new EventEmitter<boolean>();
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
}
