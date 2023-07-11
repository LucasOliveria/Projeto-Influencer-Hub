import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {
  formLogin: { email: string, password: string } = {
    email: "",
    password: ""
  }
}
