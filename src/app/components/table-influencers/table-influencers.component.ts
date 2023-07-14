import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Influencer, User } from 'src/interfaces/interfaces';

@Component({
  selector: 'app-table-influencers',
  templateUrl: './table-influencers.component.html',
  styleUrls: ['./table-influencers.component.css']
})
export class TableInfluencersComponent implements OnInit {
  constructor(private router: Router) { }

  @Input() token: string | null = "";

  @Input() user?: User;

  @Input() influencers?: Influencer[];

  @Input() filteredInfluencers?: Influencer[];

  ngOnInit(): void {

  }

  async handleGoToEditInfluencer(id?: number): Promise<void> {
    console.log(id);

  }
}
