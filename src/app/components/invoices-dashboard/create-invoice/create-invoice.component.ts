import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { PAYMENTTYPS, PAYMENTSTATUS } from "src/app/constants/invoice.constant";
const { v1: uuidv1 } = require('uuid');

@Component({
  selector: 'create-invoice',
  templateUrl: './create-invoice.component.html',
  styleUrls: ['./create-invoice.component.scss']
})
export class CreateInvoiceComponent implements OnInit {
  @Output() createInvoiceAction = new EventEmitter<boolean>();
  invoiceForm: FormGroup;
  paymentTypeOptions = PAYMENTTYPS;
  paymentStatusOptions = PAYMENTSTATUS;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initInvoiceForm()
  }
  initInvoiceForm() {
    this.invoiceForm = this.formBuilder.group({
      item: ['', Validators.required],
      quantity: ['', Validators.required],
      price: ['', [Validators.required]],
      paymentStatus: [null, Validators.required],
      paymentType: [null, Validators.required]
    });
  }
  createInvoice() {
    this.invoiceForm.value['id'] = uuidv1()
    this.createInvoiceAction.emit(this.invoiceForm.value);
  }
}
