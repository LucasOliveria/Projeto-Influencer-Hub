import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import api from 'src/service/api';
import { getItem, removeItem } from 'src/utils/storage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) { }

  token: string | null = "";
  user?: {
    id: number
    name: string
    email: string
    authorized: boolean
  }

  ngOnInit(): void {
    this.token = getItem("token");

    if (!this.token) {
      this.router.navigate(["/"]);
    }

    this.getUser();
  }

  async getUser(): Promise<void> {
    try {
      const response = await api.get("/profile", {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      });

      this.user = response.data;
    } catch (error: any) {
      console.log(error.response.data);
    }
  }

  async handleLogout() {
    removeItem("token");

    this.router.navigate(["/"]);
  }
}

