import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeScreenComponent} from "./home-screen.component";
import {EpisodeCardComponent} from "./components/episode-card/episode-card.component";



@NgModule({
  declarations: [HomeScreenComponent, EpisodeCardComponent],
  imports: [
    CommonModule,
  ]
})
export class HomeScreenModule { }
