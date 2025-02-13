import { Component } from '@angular/core';
import { LoginInputComponent } from "../../components/login-input/login-input.component";

@Component({
  selector: 'app-login',
  imports: [
    LoginInputComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
