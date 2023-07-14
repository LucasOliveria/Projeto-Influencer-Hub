import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Influencer } from 'src/interfaces/interfaces';
import api from 'src/service/api';
import { getItem } from 'src/utils/storage';
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-container-delete',
  templateUrl: './container-delete.component.html',
  styleUrls: ['./container-delete.component.css']
})
export class ContainerDeleteComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute, private toastr: ToastrService) { }

  token: string | null = "";

  influencer?: Influencer;

  waiting: any;

  ngOnInit(): void {
    this.token = getItem("token");

    this.getInfluencer();
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
    } catch (error: any) {
      this.toastr.error(error.response.data);
    }
  }

  async deleteInfluencer(): Promise<void> {
    const idInfluencer = this.route.snapshot.paramMap.get("id");

    this.waiting = this.toastr.info("Processando...", "Por favor aguarde", { timeOut: 0 });

    try {
      const response = await api.delete(`/influencers/${idInfluencer}`, {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      });

      this.toastr.success(response.data);

      this.toastr.clear(this.waiting.toastId);

      this.handleGoToHome();
    } catch (error: any) {
      this.toastr.error(error.response.data);

      this.toastr.clear(this.waiting.toastId);
    }
  }

  handleGoToHome() {
    this.router.navigate(["/home"]);
  }
}
