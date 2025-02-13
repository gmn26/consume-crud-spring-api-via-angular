import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private httpClient = inject(HttpClient);

  API_URI = "http://localhost:8080/api/v1/auth/login";

  submitLogin(username: String, password: String): Observable<any> {
    console.log("Username : ", username);
    console.log("Password : ", password);

    const body = {
      username,
      password
    }

    return this.httpClient.post(this.API_URI, body);
  }
}
