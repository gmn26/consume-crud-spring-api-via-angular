import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RegisterDto } from '../../types/auth-interface';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private httpClient = inject(HttpClient);

  API_URI = "http://localhost:8080/api/v1/auth/register";

  submitRegister(body: RegisterDto) {
    return this.httpClient.post(this.API_URI, body);
  }
}
