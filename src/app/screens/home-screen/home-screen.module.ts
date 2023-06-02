import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeScreenComponent} from "./home-screen.component";
import {EpisodeCardComponent} from "./components/episode-card/episode-card.component";
import {HomeScreenRoutingModule} from "./home-screen-routing.module";



@NgModule({
  declarations: [HomeScreenComponent, EpisodeCardComponent],
  imports: [
    CommonModule,
    HomeScreenRoutingModule
  ]
})
export class HomeScreenModule { }
