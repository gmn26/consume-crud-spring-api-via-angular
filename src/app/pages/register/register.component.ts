import { Component } from '@angular/core';
import { RegisterInputComponent } from "../../components/register-input/register-input.component";

@Component({
  selector: 'app-register',
  imports: [
    RegisterInputComponent,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

}
