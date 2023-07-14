import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getItem } from 'src/utils/storage';

@Component({
  selector: 'app-delete-influencer',
  templateUrl: './delete-influencer.component.html',
  styleUrls: ['./delete-influencer.component.css']
})
export class DeleteInfluencerComponent implements OnInit {
  constructor(private router: Router) { }

  token: string | null = "";

  ngOnInit(): void {
    this.token = getItem("token");

    if (!this.token) {
      this.router.navigate(["/"]);
      return
    }
  }
}
