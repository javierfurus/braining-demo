import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutScreenComponent } from './screens/about-screen/about-screen.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { EpisodeCardComponent } from './screens/home-screen/components/episode-card/episode-card.component';
import {HomeScreenModule} from "./screens/home-screen/home-screen.module";

@NgModule({
  declarations: [
    AppComponent,
    AboutScreenComponent,
    LoginScreenComponent,
  ],
  imports: [
    BrowserModule,
    HomeScreenModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
