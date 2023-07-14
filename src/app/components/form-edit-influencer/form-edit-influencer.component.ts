import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from "ngx-toastr";
import { Categories, Influencer } from 'src/interfaces/interfaces';
import api from 'src/service/api';
import { getItem } from 'src/utils/storage';

@Component({
  selector: 'app-form-edit-influencer',
  templateUrl: './form-edit-influencer.component.html',
  styleUrls: ['./form-edit-influencer.component.css', '../../shared/forms.css']
})
export class FormEditInfluencerComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute, private toastr: ToastrService) { }

  token: string | null = "";

  currentPage: string = "edit-influencer";

  categories?: Categories[];

  influencer!: Influencer;

  selectedCategory: string = "";

  waiting: any;

  ngOnInit(): void {
    this.token = getItem("token");

    this.getCategories();
    this.getInfluencer();
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

  async getInfluencer(): Promise<void> {
    const idInfluencer = this.route.snapshot.paramMap.get("id");

    try {
      const response = await api.get(`/influencers/${idInfluencer}`, {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      });

      this.influencer = response.data;
      this.selectedCategory = response.data.category;
    } catch (error: any) {
      this.toastr.error(error.response.data);
    }
  }

  async handleFormEdit(): Promise<void> {
    const idInfluencer = this.route.snapshot.paramMap.get("id");

    const id_category = this.categories?.find((category) => category.category === this.selectedCategory);

    const { id, id_user, category, ...influncerProps } = this.influencer;

    this.waiting = this.toastr.info("Processando...", "Por favor aguarde", { timeOut: 0 });

    try {
      await api.put(`/influencers/${idInfluencer}`, {
        ...influncerProps,
        id_category: id_category?.id
      },
        {
          headers: {
            Authorization: `Bearer ${this.token}`
          }
        });

      this.toastr.success("Influencer atualizado com sucesso!");

      this.toastr.clear(this.waiting.toastId);

      this.router.navigate(["/home"]);
    } catch (error: any) {
      this.toastr.error(error.response.data);

      this.toastr.clear(this.waiting.toastId);
    }
  }
}
