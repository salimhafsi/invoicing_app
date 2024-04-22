import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoicesDashboardComponent } from "src/app/components/invoices-dashboard/invoices-dashboard.component";
import { InvoicesListComponent } from "src/app/components/invoices-dashboard/invoices-list/invoices-list.component";


const routes: Routes = [
    {
        path: '',
        component: InvoicesDashboardComponent,
        children: [{
            path: '',
            component: InvoicesListComponent
        }]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class InvoicesDashboardRoutingModule { }