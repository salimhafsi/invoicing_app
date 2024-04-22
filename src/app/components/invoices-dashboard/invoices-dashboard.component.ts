import { Component, OnInit } from '@angular/core';
import { UserService } from "src/app/services/user.service";
import { UserInformationModel } from "src/app/models/user.model";
import { Router } from "@angular/router";

@Component({
  selector: 'invoices-dashboard',
  templateUrl: './invoices-dashboard.component.html',
  styleUrls: ['./invoices-dashboard.component.scss']
})
export class InvoicesDashboardComponent implements OnInit {
  userInformations: UserInformationModel
  constructor(private userService: UserService, private route: Router) { }

  ngOnInit(): void {
    this.userInformations = this.userService.getUserInformations()
  }
  logout() {
    localStorage.setItem('userRole', '');
    localStorage.setItem('userName', '');
    this.route.navigate(['/login']);
  }
}
