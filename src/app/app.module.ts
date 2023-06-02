import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginScreenComponent} from './screens/login-screen/login-screen.component';
import {HomeScreenModule} from "./screens/home-screen/home-screen.module";
import {AboutScreenModule} from "./screens/about-screen/about-screen.module";

@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
  ],
  imports: [
    BrowserModule,
    HomeScreenModule,
    AboutScreenModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
