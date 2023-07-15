import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from "ngx-toastr";
import { User } from 'src/interfaces/interfaces';
import api from 'src/service/api';
import { getItem, removeItem } from 'src/utils/storage';

@Component({
  selector: 'app-add-influencer',
  templateUrl: './add-influencer.component.html',
  styleUrls: ['../../shared/generic-main.css']
})
export class AddInfluencerComponent implements OnInit {
  constructor(private router: Router, private toastr: ToastrService) { }

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
      this.toastr.error(error.response.data);
    }
  }

  handleLogout() {
    removeItem("token");

    this.router.navigate(["/"]);
  }
}
