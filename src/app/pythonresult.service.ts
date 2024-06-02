import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PythonresultService {
  private apiUrl = 'http://localhost:8080/api/v1/user/python-result';

  constructor(private http: HttpClient) { }
  getPythonResult(accountName: string): Observable<any> {
    const url = `${this.apiUrl}/${accountName}`;
    return this.http.get<any>(url);
  }
}