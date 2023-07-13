import { Component } from '@angular/core';
import api from 'src/service/api';
import { setItem } from 'src/utils/storage';
import { Router } from "@angular/router";

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css', '../../shared/forms.css']
})
export class FormLoginComponent {
  constructor(private router: Router) { }

  formLogin: { email: string, password: string } = {
    email: "",
    password: ""
  }
  show: boolean = false;
  exitForm: boolean = false;

  showPassword(): void {
    this.show = !this.show;
  }

  async handleFormLogin(): Promise<void> {
    if (this.formLogin.email === "") {
      return console.log("E-mail obrigatório");
    }

    if (this.formLogin.password === "") {
      return console.log("Senha obrigatória");
    }

    try {
      const response = await api.post("/login", {
        email: this.formLogin.email,
        password: this.formLogin.password
      });

      setItem("token", response.data.token);

      console.log(`Bem-vindo(a) ${response.data.usuario.name}`);

      this.exitForm = true;

      setTimeout(() => {
        this.router.navigate(["/home"]);
      }, 570);
    } catch (error: any) {
      console.log(error.response.data);
    }
  }

  handleGoToSignUp(): void {
    this.exitForm = true;

    setTimeout(() => {
      this.router.navigate(["/signup"]);
    }, 570);
  }
}
