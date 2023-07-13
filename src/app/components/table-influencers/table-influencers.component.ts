import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import api from 'src/service/api';


@Component({
  selector: 'app-table-influencers',
  templateUrl: './table-influencers.component.html',
  styleUrls: ['./table-influencers.component.css']
})
export class TableInfluencersComponent implements OnInit {
  constructor(private router: Router) { }

  @Input() token: string | null = "";
  influencers?: {
    id: number
    name: string
    email: string
    age: number
    subscribers: number
    at_channel: string
    platform: string
    id_user: number
    id_category: number
    category: string
  }[];


  ngOnInit(): void {
    this.getInfluencers()
  }

  async getInfluencers(): Promise<void> {
    try {
      const response = await api.get("/influencers", {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      })

      this.influencers = response.data;
    } catch (error: any) {
      console.log(error.response.data);
    }
  }

  async handleGoToEditInfluencer(id?: number): Promise<void> {
    console.log(id);

  }

}
