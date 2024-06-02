import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private loginUrl1 = 'http://localhost:8080/api/v1/user/login';
    private loginUrl2 = 'http://localhost:8080/api/v1/user';
    private resetPasswordUrl = 'http://localhost:8080/api/v1/user/reset-password'; // Ajout de cette ligne

    constructor(private http: HttpClient) { }

    login(email: string, password: string, mode: string): Observable<any> {
        return this.http.post(this.loginUrl1, { email, password, mode });
    }

    checkEmailExists(email: string): Observable<User | null> {
        return this.http.post<User | null>(`${this.loginUrl2}/check-email`, { email });
    }

    recoverPassword(email: string): Observable<any> {
        return this.http.post(`${this.loginUrl2}/recover-password`, { email });
    }
    resetPassword(token: string, newPassword: string): Observable<any> {
        return this.http.post(this.resetPasswordUrl, { token, newPassword });
      }
}
