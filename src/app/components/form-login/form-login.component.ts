import { Component, Input, OnInit } from '@angular/core';
import api from 'src/service/api';
import { setItem } from 'src/utils/storage';
import { Router } from "@angular/router";

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {
  constructor(private router: Router) { }

  formLogin: { email: string, password: string } = {
    email: "",
    password: ""
  }

  show: boolean = false;

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

      this.formLogin.email = "";
      this.formLogin.password = "";

      console.log(`Bem-vindo(a) ${response.data.usuario.name}`);

      this.router.navigate(["/home"]);
    } catch (error: any) {
      console.log(error.response.data);
    }
  }

  handleGoToSignUp(): void {
    this.router.navigate(["/signup"])
  }
}
