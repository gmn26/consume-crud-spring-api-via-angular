import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { LoginService } from '../../services/auth/login.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login-input',
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './login-input.component.html',
  styleUrl: './login-input.component.css'
})
export class LoginInputComponent {
  private router = inject(Router);
  private cookieService = inject(CookieService);

  loginService = inject(LoginService);
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  loginAction() {
    this.loginService.submitLogin(
      this.loginForm.value.username ?? '',
      this.loginForm.value.password ?? ''
    ).subscribe({
      next: (response) => {
        this.cookieService.set("token", response?.data?.token)
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        console.error("Ketika error : ", error)
      }
    });
  }
}
