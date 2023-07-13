import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getItem } from 'src/utils/storage';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['../../shared/login-sign-up.css']
})
export class SignUpComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
    if (getItem("token")) {
      this.router.navigate(["/home"]);
    }
  }
}
