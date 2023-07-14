import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categories, Influencer, User } from 'src/interfaces/interfaces';
import api from 'src/service/api';
import { getItem } from 'src/utils/storage';
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private toastr: ToastrService) { }

  token: string | null = "";

  user?: User

  influencers?: Influencer[];

  search: string = "";

  categories?: Categories[];

  searchCategory: string = "";

  currentPage: string = "home";

  ngOnInit(): void {
    this.token = getItem("token");

    if (!this.token) {
      this.router.navigate(["/"]);
      return;
    }

    this.getUser();
    this.getInfluencers();
    this.getCategories();
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
      this.toastr.error(error.response.data);
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
      this.toastr.error(error.response.data);
    }
  }

  async getCategories(): Promise<void> {
    try {
      const response = await api.get("/categories", {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      });

      this.categories = response.data;
    } catch (error: any) {
      this.toastr.error(error.response.data);
    }
  }

  get filteredInfluencers(): Influencer[] {
    if (this.influencers && this.search.trim() === '' && this.searchCategory === '') {
      return this.influencers;
    }

    if (this.influencers && this.search) {
      const influencers = this.influencers.filter(influencer =>
        influencer.name.toLowerCase().includes(this.search.toLowerCase()) || influencer.platform.toLowerCase().includes(this.search.toLowerCase())
      );

      return influencers;
    }

    if (this.influencers && this.searchCategory) {
      const influencers = this.influencers.filter(influencer =>
        influencer.category === this.searchCategory
      );

      return influencers;
    }

    return [];
  }

}

