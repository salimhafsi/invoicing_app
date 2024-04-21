import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from "src/app/models/user.model";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiUrl = environment.apiUrl;
  isLogged = false
  constructor(private http: HttpClient) { }

  login(userName: string, password: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users?userName=${userName}&password=${password}`).pipe(
      tap(user => {
        if (user && user.length > 0) {
          localStorage.setItem('userRole', user[0].role)
          this.isLogged = true
        }
      })
    );
  }
  isUserAuthenticated(): boolean {
    return this.isLogged
  }

}