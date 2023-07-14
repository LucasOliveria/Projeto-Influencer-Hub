import { Component } from '@angular/core';
import api from 'src/service/api';
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-form-sign-up',
  templateUrl: './form-sign-up.component.html',
  styleUrls: ['./form-sign-up.component.css', '../../shared/forms.css']
})
export class FormSignUpComponent {
  constructor(private router: Router, private toastr: ToastrService) { }

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
      this.toastr.info("O campo Nome é obrigatório");
      return
    }

    if (this.formSignUp.email === "") {
      this.toastr.info("O campo E-mail é obrigatório");
      return
    }

    if (this.formSignUp.password === "") {
      this.toastr.info("O campo Senha é obrigatório");
      return
    }

    try {
      const response = await api.post("/user", {
        name: this.formSignUp.name,
        email: this.formSignUp.email,
        password: this.formSignUp.password,
        authorized: this.formSignUp.authorized
      });

      this.toastr.success(response.data);

      this.exitForm = true;

      setTimeout(() => {
        this.router.navigate(["/"]);
      }, 570);
    } catch (error: any) {
      this.toastr.error(error.response.data);
    }
  }

  handleGoToLogin(): void {
    this.exitForm = true;

    setTimeout(() => {
      this.router.navigate(["/"]);
    }, 570);
  }
}
