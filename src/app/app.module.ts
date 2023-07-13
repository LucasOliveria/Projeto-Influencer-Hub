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

@NgModule({
  declarations: [
    AppComponent,
    FormLoginComponent,
    SignUpComponent,
    FormSignUpComponent,
    HomeComponent,
    EditInfluencerComponent,
    LoginComponent,
    AddInfluencerComponent
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
