import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { UserCredentialModel } from "src/app/models/user.model";
import { environment } from "src/environments/environment";
import { Router } from "@angular/router";
import { InvoiceModel } from "src/app/models/invoice.model";
import { MessageService } from "primeng/api";

@Injectable({
    providedIn: 'root'
})
export class InvoicesService {
    private apiUrl = environment.apiUrl;
    constructor(private http: HttpClient, private messageService: MessageService) { }

    getInvoicesList(): Observable<InvoiceModel[]> {
        return this.http.get<InvoiceModel[]>(`${this.apiUrl}/invoices`)
    }
    addInvoice(invoice: InvoiceModel): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/invoices`, invoice).pipe(
            map(updatedProject => {
                this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Invoice added' });
            }),
            catchError((error: any) => {
                this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Server error' });
                return throwError('Server error');
            }
            ))
    }
    updateInvoice(invoice: InvoiceModel): Observable<any> {
        return this.http.put(`${this.apiUrl}/invoices/${invoice.id}`, invoice).pipe(
            map(updatedProject => {
                this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Invoice updated' });
            }),
            catchError((error: any) => {
                this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Server error' });
                return throwError('Server error');
            }
            ))
    }
    deleteInvoice(invoiceId: string): Observable<any> {
        const endPoint = `${this.apiUrl}/invoices/${invoiceId}`
        return this.http.delete<any>(endPoint)
            .pipe(
            map(updatedProject => {
                this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Invoice deleted' });
            }),
            catchError((error: any) => {
                this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Server error' });
                return throwError('Server error');
            }
            ))
    }
}