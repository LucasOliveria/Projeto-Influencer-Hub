import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import api from 'src/service/api';
import { setItem } from 'src/utils/storage';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css', '../../shared/forms.css']
})
export class FormLoginComponent {
  constructor(private router: Router, private toastr: ToastrService) { }

  formLogin: { email: string, password: string } = {
    email: "",
    password: ""
  }
  show: boolean = false;
  exitForm: boolean = false;

  showPassword(): void {
    this.show = !this.show;
  }

  waiting: any;

  async handleFormLogin(): Promise<void> {
    if (this.formLogin.email === "") {
      this.toastr.info("E-mail obrigatório");
      return;
    }

    if (this.formLogin.password === "") {
      this.toastr.info("Senha obrigatória");
      return;
    }

    this.waiting = this.toastr.info("Processando...", "Por favor aguarde", { timeOut: 0 });

    try {
      const response = await api.post("/login", {
        email: this.formLogin.email,
        password: this.formLogin.password
      });

      setItem("token", response.data.token);

      this.toastr.success(`Bem-vindo(a) ${response.data.usuario.name}`);

      this.toastr.clear(this.waiting.toastId);

      this.exitForm = true;

      setTimeout(() => {
        this.router.navigate(["/home"]);
      }, 570);
    } catch (error: any) {
      this.toastr.error(error.response.data);

      this.toastr.clear(this.waiting.toastId);
    }
  }

  handleGoToSignUp(): void {
    this.exitForm = true;

    setTimeout(() => {
      this.router.navigate(["/signup"]);
    }, 570);
  }
}
