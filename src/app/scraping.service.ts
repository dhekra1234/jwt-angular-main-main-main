import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrapingService {

  private baseUrl = 'http://localhost:8080/api/v1/user'; // URL du service Spring Boot

  constructor(private http: HttpClient) { }
  scrapeProfile(profileUrl: string): Observable<any> {
    return this.http.post(this.baseUrl + '/scrape', { profileUrl });  }
}