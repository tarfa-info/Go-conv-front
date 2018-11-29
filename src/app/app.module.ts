import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Http, HttpModule} from '@angular/http';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {Routes, RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistryService } from './registry.service';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './slider/slider.component';
import { ConversionComponent } from './conversion/conversion.component';
import { HistoryComponent } from './history/history.component';
import {UpLoadService} from './up-load.service';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FileComponent } from './file/file.component';

const appRoute = [
  {path: 'login' , component: LoginComponent},
  {path: 'signup' , component: SignUpComponent},
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  {path: 'dash', component: DashbordComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignUpComponent,
    DashbordComponent,
    ProfileComponent,
    HomeComponent,
    SliderComponent,
    ConversionComponent,
    HistoryComponent,
    FileComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(appRoute),
    NgxSpinnerModule,
  ],
  providers: [RegistryService, UpLoadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
