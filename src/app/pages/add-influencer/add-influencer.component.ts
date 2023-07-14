import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/interfaces/interfaces';
import api from 'src/service/api';
import { getItem, removeItem } from 'src/utils/storage';

@Component({
  selector: 'app-add-influencer',
  templateUrl: './add-influencer.component.html',
  styleUrls: ['./add-influencer.component.css']
})
export class AddInfluencerComponent implements OnInit {
  constructor(private router: Router) { }

  token: string | null = "";

  user?: User

  currentPage: string = "add";

  ngOnInit(): void {
    this.token = getItem("token");

    if (!this.token) {
      this.router.navigate(["/"]);
      return;
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

  handleLogout() {
    removeItem("token");

    this.router.navigate(["/"]);
  }
}
