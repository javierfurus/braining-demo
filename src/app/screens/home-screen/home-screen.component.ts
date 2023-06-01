import { Component, OnInit } from '@angular/core';
import { EpisodesService } from 'src/app/services/episodes.service';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss'],
})
export class HomeScreenComponent implements OnInit {
  public episodes$ = this.episodesService.getEpisodesWithHttpClient$();

  constructor(private readonly episodesService: EpisodesService) {}

  ngOnInit(): void {
    this.getEpisodesWithHttpClient();
  }

  private getEpisodesWithHttpClient(): void {
    this.episodes$.subscribe((episodes) => {
      console.log('withHttpClient', episodes);
    });
  }
}
