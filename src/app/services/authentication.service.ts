import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { UserCredentialModel } from "src/app/models/user.model";
import { environment } from "src/environments/environment";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient, private route: Router) { }

  login(userName: string, password: string): Observable<boolean> {
    return this.http.get<UserCredentialModel[]>(`${this.apiUrl}/users?userName=${userName}&password=${password}`).pipe(
      tap(users => {
        if (users && users[0]) {
          localStorage.setItem('userRole', users[0].userRole);
          localStorage.setItem('userName', users[0].userName)
          this.route.navigate([''])
        }
      }),
      map(users => { return users && users[0] ? true : false })
    );
  }
  isUserAuthenticated(): string {
    return localStorage.getItem('userRole')
  }

}