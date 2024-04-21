import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'create-invoice',
  templateUrl: './create-invoice.component.html',
  styleUrls: ['./create-invoice.component.scss']
})
export class CreateInvoiceComponent implements OnInit {
  @Output() createInvoiceAction = new new EventEmitter<boolean>();
  invoiceForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.invoiceForm = this.formBuilder.group({
      item: ['', Validators.required],
      quantity: ['', Validators.required],
      price: ['', [Validators.required, Validators.email]],
      paymentStatus: ['', Validators.required],
      paymentType: ['', Validators.required]
    });
  }
}
