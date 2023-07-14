import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Categories, Influencer } from 'src/interfaces/interfaces';
import api from 'src/service/api';
import { getItem } from 'src/utils/storage';

@Component({
  selector: 'app-form-add-influencer',
  templateUrl: './form-add-influencer.component.html',
  styleUrls: ['./form-add-influencer.component.css', '../../shared/forms.css']
})
export class FormAddInfluencerComponent {
  constructor(private router: Router) { }

  token: string | null = "";

  currentPage: string = "edit-influencer";

  categories?: Categories[];

  influencer: {
    name: string,
    email?: string,
    age?: string | number,
    subscribers: string | number,
    at_channel: string,
    platform: string,
    id_category: string | number
  } = {
      name: "",
      email: "",
      age: "",
      subscribers: "",
      at_channel: "",
      platform: "",
      id_category: ""
    }

  selectedCategory: string = "";

  ngOnInit(): void {
    this.token = getItem("token");

    this.getCategories();
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
      console.log(error.response.data);
    }
  }

  async handleFormAdd(): Promise<void> {
    const id_category = this.categories?.find((category) => category.category === this.selectedCategory);

    try {
      const response = await api.post("/influencers", {
        ...this.influencer,
        id_category: id_category?.id
      },
        {
          headers: {
            Authorization: `Bearer ${this.token}`
          }
        });

      console.log("Influencer cadastrado com sucesso!");

      this.router.navigate(["/home"]);
    } catch (error: any) {
      console.log(error.response.data);
    }
  }
}
