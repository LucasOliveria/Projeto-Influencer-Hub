import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from "ngx-toastr";
import { Categories } from 'src/interfaces/interfaces';
import api from 'src/service/api';
import { getItem } from 'src/utils/storage';

@Component({
  selector: 'app-form-add-influencer',
  templateUrl: './form-add-influencer.component.html',
  styleUrls: ['./form-add-influencer.component.css', '../../shared/forms.css']
})
export class FormAddInfluencerComponent implements OnInit {
  constructor(private router: Router, private toastr: ToastrService) { }

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

  waiting: any;

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
      this.toastr.error(error.response.data);
    }
  }

  async handleFormAdd(): Promise<void> {
    const id_category = this.categories?.find((category) => category.category === this.selectedCategory);

    this.waiting = this.toastr.info("Processando...", "Por favor aguarde", { timeOut: 0 });

    try {
      await api.post("/influencers", {
        ...this.influencer,
        id_category: id_category?.id
      },
        {
          headers: {
            Authorization: `Bearer ${this.token}`
          }
        });

      this.toastr.success("Influencer cadastrado com sucesso!");

      this.toastr.clear(this.waiting.toastId);

      this.router.navigate(["/home"]);
    } catch (error: any) {
      this.toastr.error(error.response.data);

      this.toastr.clear(this.waiting.toastId);
    }
  }
}
