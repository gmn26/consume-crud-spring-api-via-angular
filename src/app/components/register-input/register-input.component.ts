import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RegisterDto } from '../../types/auth-interface';
import { RegisterService } from '../../services/auth/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-input',
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './register-input.component.html',
  styleUrl: './register-input.component.css'
})
export class RegisterInputComponent {
  private router = inject(Router);

  registerService = inject(RegisterService);
  registerForm = new FormGroup({
    name: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
    role: new FormControl(''),
  })

  registerAction() {
    const registerDto: RegisterDto = {
      name: this.registerForm.value.name ?? '',
      username: this.registerForm.value.username ?? '',
      password: this.registerForm.value.password ?? '',
      role: this.registerForm.value.role ?? '',
    }

    this.registerService.submitRegister(registerDto).subscribe({
      next: (response) => {
        console.log("Response : ", response);
        alert("Berhasil daftar, silahkan masuk");
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error("Error : ", err);
        alert("Gagal mendaftar");
        this.registerForm.reset();
      }
    })
  }
}
