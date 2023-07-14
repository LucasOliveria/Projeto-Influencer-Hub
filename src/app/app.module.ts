import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { FormSignUpComponent } from './components/form-sign-up/form-sign-up.component';
import { EditInfluencerComponent } from './pages/edit-influencer/edit-influencer.component';
import { HomeComponent } from './pages/home/home.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { AppRoutingModule } from './routes/app-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { AddInfluencerComponent } from './pages/add-influencer/add-influencer.component';
import { TableInfluencersComponent } from './components/table-influencers/table-influencers.component';
import { DeleteInfluencerComponent } from './pages/delete-influencer/delete-influencer.component';
import { ContainerDeleteComponent } from './components/container-delete/container-delete.component';
import { LateralBarComponent } from './components/lateral-bar/lateral-bar.component';
import { FormEditInfluencerComponent } from './components/form-edit-influencer/form-edit-influencer.component';

@NgModule({
  declarations: [
    AppComponent,
    FormLoginComponent,
    SignUpComponent,
    FormSignUpComponent,
    HomeComponent,
    EditInfluencerComponent,
    LoginComponent,
    AddInfluencerComponent,
    TableInfluencersComponent,
    DeleteInfluencerComponent,
    ContainerDeleteComponent,
    LateralBarComponent,
    FormEditInfluencerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
