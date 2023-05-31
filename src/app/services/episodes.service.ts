import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Episode } from '../interfaces/episode.interface';

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

  public getEpisodesWithHttpClient$(): Observable<Episode[]> {
    return this.httpClient.get<{ results: Episode[] }>(this.baseUrl).pipe(
      map((episodes) => {
        return episodes.results;
      })
    );
  }
}
