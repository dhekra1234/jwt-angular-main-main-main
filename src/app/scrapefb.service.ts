import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrapefbService {

  private baseUrl = 'http://localhost:8080/api/v1/user'; // URL du service Spring Boot

  constructor(private http: HttpClient) { }
  scrapeProfile(profileFb: string): Observable<any> {
    return this.http.post(this.baseUrl + '/scrapeFb', { profileFb });  }
}
