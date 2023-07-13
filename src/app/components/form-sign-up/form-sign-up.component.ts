import { Component, Input, OnInit } from '@angular/core';
import api from 'src/service/api';
import { setItem } from 'src/utils/storage';
import { Router } from "@angular/router";

@Component({
  selector: 'app-form-sign-up',
  templateUrl: './form-sign-up.component.html',
  styleUrls: ['./form-sign-up.component.css']
})
export class FormSignUpComponent {
  constructor(private router: Router) { }

  formSignUp: {
    name: string
    email: string
    password: string
    authorized: boolean
  } = {
      name: "",
      email: "",
      password: "",
      authorized: true
    }

  show: boolean = false;

  showPassword(): void {
    this.show = !this.show;
  }

  async handleFormSignUp(): Promise<void> {
    // if (this.formLogin.email === "") {
    //   return console.log("E-mail obrigatório");
    // }

    // if (this.formLogin.password === "") {
    //   return console.log("Senha obrigatória");
    // }

    // try {
    //   const response = await api.post("/login", {
    //     email: this.formLogin.email,
    //     password: this.formLogin.password
    //   });

    //   setItem("token", response.data.token);

    //   this.formLogin.email = "";
    //   this.formLogin.password = "";

    //   console.log(`Bem-vindo(a) ${response.data.usuario.name}`);

    //   this.router.navigate(["/home"]);
    // } catch (error: any) {
    //   console.log(error.response.data);
    // }
  }

  handleGoToLogin(): void {
    this.router.navigate(["/"])
  }
}
