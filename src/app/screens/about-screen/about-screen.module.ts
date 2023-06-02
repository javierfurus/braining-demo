import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutScreenRoutingModule} from "./about-screen-routing.module";
import {AboutScreenComponent} from "./about-screen.component";


@NgModule({
  declarations: [AboutScreenComponent],
  imports: [
    CommonModule,
    AboutScreenRoutingModule
  ]
})
export class AboutScreenModule { }
