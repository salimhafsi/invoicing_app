import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { UserCredentialModel } from "src/app/models/user.model";
import { environment } from "src/environments/environment";
import { Router } from "@angular/router";
import { InvoiceModel } from "src/app/models/invoice.model";

@Injectable({
    providedIn: 'root'
})
export class InvoicesService {
    private apiUrl = environment.apiUrl;
    constructor(private http: HttpClient) { }

    getInvoicesList(): Observable<InvoiceModel[]> {
        return this.http.get<InvoiceModel[]>(`${this.apiUrl}/invoices`)
    }
}