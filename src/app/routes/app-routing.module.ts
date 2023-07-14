import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { SignUpComponent } from '../pages/sign-up/sign-up.component';
import { HomeComponent } from '../pages/home/home.component';
import { EditInfluencerComponent } from '../pages/edit-influencer/edit-influencer.component';
import { LoginComponent } from '../pages/login/login.component';
import { AddInfluencerComponent } from '../pages/add-influencer/add-influencer.component';
import { DeleteInfluencerComponent } from '../pages/delete-influencer/delete-influencer.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "signup", component: SignUpComponent },
  { path: "home", component: HomeComponent },
  { path: "edit-influencer/:id", component: EditInfluencerComponent },
  { path: "add-influencer", component: AddInfluencerComponent },
  { path: "delete-influencer/:id", component: DeleteInfluencerComponent }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
