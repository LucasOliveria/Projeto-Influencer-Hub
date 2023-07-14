import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Influencer, User } from 'src/interfaces/interfaces';

@Component({
  selector: 'app-table-influencers',
  templateUrl: './table-influencers.component.html',
  styleUrls: ['./table-influencers.component.css']
})
export class TableInfluencersComponent {
  constructor(private router: Router) { }

  @Input() token: string | null = "";

  @Input() user?: User;

  @Input() influencers?: Influencer[];

  @Input() filteredInfluencers?: Influencer[];

  async handleGoToEditInfluencer(id?: number): Promise<void> {
    this.router.navigate([`edit-influencer/${id}`]);
  }

  handleGoToDeleteInfluencer(id?: number) {
    this.router.navigate([`delete-influencer/${id}`]);
  }
}
