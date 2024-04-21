import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InvoicesDashboardComponent } from './components/invoices-dashboard/invoices-dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { AuthenticationService } from "src/app/services/authentication.service";
import { AuthenticationGuard } from "src/app/guard/authentication.guard";
import { MessageService } from "primeng/api";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [
    AuthenticationService,
    AuthenticationGuard,
    MessageService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
