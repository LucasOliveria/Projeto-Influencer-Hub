import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getItem } from 'src/utils/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../shared/login-sign-up.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
    if (getItem("token")) {
      this.router.navigate(["/home"]);
    }
  }
}
