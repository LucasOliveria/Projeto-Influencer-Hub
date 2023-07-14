import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Influencer } from 'src/interfaces/interfaces';
import api from 'src/service/api';
import { getItem } from 'src/utils/storage';

@Component({
  selector: 'app-container-delete',
  templateUrl: './container-delete.component.html',
  styleUrls: ['./container-delete.component.css']
})
export class ContainerDeleteComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) { }

  token: string | null = "";

  influencer?: Influencer;

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
      console.log(error.response.data);
    }
  }

  async deleteInfluencer(): Promise<void> {
    const idInfluencer = this.route.snapshot.paramMap.get("id");

    try {
      const response = await api.delete(`/influencers/${idInfluencer}`, {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      });

      console.log(response.data);

      this.handleGoToHome();
    } catch (error: any) {
      console.log(error.response.data);

    }
  }

  handleGoToHome() {
    this.router.navigate(["/home"]);
  }
}
