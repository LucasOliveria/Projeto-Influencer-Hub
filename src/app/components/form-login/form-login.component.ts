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

  handleFormLogin(): void {
    if (this.formLogin.email === "") {
      return console.log("E-mail obrigatório");
    }

    if (this.formLogin.password === "") {
      return console.log("Senha obrigatória");
    }

    console.log(this.formLogin);
  }

  show: boolean = false;

  showPassword(): void {
    this.show = !this.show;
  }
}
