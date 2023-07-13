import { Component } from '@angular/core';
import api from 'src/service/api';
import { Router } from "@angular/router";

@Component({
  selector: 'app-form-sign-up',
  templateUrl: './form-sign-up.component.html',
  styleUrls: ['./form-sign-up.component.css', '../../shared/forms.css']
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
  exitForm: boolean = false

  showPassword(): void {
    this.show = !this.show;
  }

  async handleFormSignUp(): Promise<void> {
    if (this.formSignUp.name === "") {
      return console.log("O campo Nome é obrigatório");
    }

    if (this.formSignUp.email === "") {
      return console.log("O campo E-mail é obrigatório");
    }

    if (this.formSignUp.password === "") {
      return console.log("O campo Senha é obrigatório");
    }

    try {
      const response = await api.post("/user", {
        name: this.formSignUp.name,
        email: this.formSignUp.email,
        password: this.formSignUp.password,
        authorized: this.formSignUp.authorized
      });

      console.log(response.data);

      this.exitForm = true;

      setTimeout(() => {
        this.router.navigate(["/"]);
      }, 570);
    } catch (error: any) {
      console.log(error.response.data);
    }
  }

  handleGoToLogin(): void {
    this.exitForm = true;

    setTimeout(() => {
      this.router.navigate(["/"]);
    }, 570);
  }
}
