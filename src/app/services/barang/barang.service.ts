import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { CreateBarangDto } from '../../types/barang-interface';

@Injectable({
  providedIn: 'root'
})
export class BarangService {
  private httpClient = inject(HttpClient);
  private cookieService = inject(CookieService);

  private token = this.cookieService.get("token");

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.token}`
  });

  API_URI = "http://localhost:8080/api/v1/barangs";

  fetchBarang(): Observable<any> {
    return this.httpClient.get(this.API_URI, { headers: this.headers });
  }

  addBarang(body: CreateBarangDto): Observable<any> {
    return this.httpClient.post(this.API_URI, body, { headers: this.headers });
  }

  editBarang(id: Number, body: CreateBarangDto): Observable<any> {
    return this.httpClient.put(`${this.API_URI}/${id}`, body, { headers: this.headers });
  }

  deleteBarang(id: Number): Observable<any> {
    return this.httpClient.delete(`${this.API_URI}/${id}`, { headers: this.headers });
  }

  constructor() { }
}
