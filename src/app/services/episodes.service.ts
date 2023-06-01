import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, catchError, forkJoin, switchMap } from 'rxjs';
import { Episode } from '../interfaces/episode.interface';
import { EpisodeWithCharacter } from '../interfaces/episode-with-character.interface';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root',
})
export class EpisodesService {
  private readonly baseUrl = 'https://rickandmortyapi.com/api/episode';

  constructor(private readonly httpClient: HttpClient) {}

  public getEpisodesWithFetch(): Promise<any> {
    return fetch(this.baseUrl)
      .then((response) => response.json())
      .then((data) => data);
  }

  public getEpisodesWithHttpClient$(): Observable<EpisodeWithCharacter[]> {
    return this.httpClient.get<{ results: Episode[] }>(this.baseUrl).pipe(
      switchMap((episodes) => {
        return forkJoin(
          episodes.results.map((episode) => {
            return this.httpClient.get<Character>(
              episode.characters[
                this.generateRandomNumberFromArrayLength(
                  episode.characters.length
                )
              ]
            );
          })
        ).pipe(
          map((characters: Character[]) => {
            return episodes.results.map((episode, index): EpisodeWithCharacter => {
              return {
                ...episode,
                character: characters[index],
              };
            });
          })
        );
      }),
    );
  }

  private generateRandomNumberFromArrayLength(arrayLength: number): number {
    return Math.floor(Math.random() * arrayLength);
  }
}
