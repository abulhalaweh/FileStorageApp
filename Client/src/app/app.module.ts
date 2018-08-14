import { HubService } from '../services/hub.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AccountModule } from './account/account.module';
import { ProfileModule } from './profile/profile.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AccountModule,
    ProfileModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [HubService],
  bootstrap: [AppComponent]
})

export class AppModule { }
