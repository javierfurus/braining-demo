import { Component, Input } from '@angular/core';
import { EpisodeWithCharacter } from 'src/app/interfaces/episode-with-character.interface';
import { Episode } from 'src/app/interfaces/episode.interface';

@Component({
  selector: 'app-episode-card',
  templateUrl: './episode-card.component.html',
  styleUrls: ['./episode-card.component.scss'],
})
export class EpisodeCardComponent {
  @Input()
  episode!: EpisodeWithCharacter;
}
