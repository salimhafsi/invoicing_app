import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { ConfirmDialogModule } from "primeng/confirmdialog";

@Component({
    selector: 'confirm-dialog',
    templateUrl: './confirm-dialog.component.html',
    styleUrls: ['./confirm-dialog.component.scss'],
    imports: [ConfirmDialogModule],
    standalone: true
})
export class ConfirmDialogComponent {
    constructor(
    ) { }
}
