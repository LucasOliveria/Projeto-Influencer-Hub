import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/interfaces/interfaces';
import { removeItem } from 'src/utils/storage';

@Component({
  selector: 'app-lateral-bar',
  templateUrl: './lateral-bar.component.html',
  styleUrls: ['./lateral-bar.component.css']
})
export class LateralBarComponent {
  constructor(private router: Router) { }

  @Input() user?: User

  @Input() currentPage: string = "";

  handleGoHome() {
    this.router.navigate(["/home"]);
  }

  handleGoAddInfluencer() {
    this.router.navigate(["/add-influencer"]);
  }

  handleLogout() {
    removeItem("token");

    this.router.navigate(["/"]);
  }
}
