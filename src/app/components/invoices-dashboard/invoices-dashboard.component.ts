import { Component, OnInit } from '@angular/core';
import { UserService } from "src/app/services/user.service";
import { UserInformationModel } from "src/app/models/user.model";

@Component({
  selector: 'invoices-dashboard',
  templateUrl: './invoices-dashboard.component.html',
  styleUrls: ['./invoices-dashboard.component.scss']
})
export class InvoicesDashboardComponent implements OnInit {
  userInformations: UserInformationModel
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userInformations = this.userService.getUserInformations()
  }

}
