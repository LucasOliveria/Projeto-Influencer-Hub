import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Influencer, User } from 'src/interfaces/interfaces';
import api from 'src/service/api';
import { getItem, removeItem } from 'src/utils/storage';

@Component({
  selector: 'app-delete-influencer',
  templateUrl: './delete-influencer.component.html',
  styleUrls: ['./delete-influencer.component.css']
})
export class DeleteInfluencerComponent {
  constructor(private router: Router) { }

  token: string | null = "";

  user?: User

  influencers?: Influencer[];

  ngOnInit(): void {
    this.token = getItem("token");

    if (!this.token) {
      this.router.navigate(["/"]);
      return
    }

    this.getUser();
    this.getInfluencers();
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

  async getInfluencers(): Promise<void> {
    try {
      const response = await api.get("/influencers", {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      });

      this.influencers = response.data;
    } catch (error: any) {
      console.log(error.response.data);
    }
  }

  handleLogout() {
    removeItem("token");

    this.router.navigate(["/"]);
  }
}
