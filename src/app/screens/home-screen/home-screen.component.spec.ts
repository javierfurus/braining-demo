import { ComponentFixture, TestBed } from '@angular/core/testing'; // Testing utilities for Angular

import { HomeScreenComponent } from './home-screen.component';
import { HttpClient } from '@angular/common/http';
import { EpisodesService } from 'src/app/services/episodes.service';
import { Observable, of } from 'rxjs';
import { EpisodeWithCharacter } from 'src/app/interfaces/episode-with-character.interface';
import { EpisodeCardComponent } from './components/episode-card/episode-card.component';

describe('HomeScreenComponent', () => {
  // The describe function that is used describe and group together test suite
  let component: HomeScreenComponent; // The component that is being tested
  let fixture: ComponentFixture<HomeScreenComponent>; // The fixture is a test envurinment created for the component

  beforeEach(() => {
    const episodeServiceStub = {
      // The stubbed service that is used to mock the service (a stub is a truncated, fake implementation of a service)
      getEpisodesWithHttpClient$: (): Observable<EpisodeWithCharacter[]> => // Mocked implementation of the getEpisodesWithHttpClient$ method
        of([
          // Mocked response of the getEpisodesWithHttpClient$ method
          {
            id: 1,
            name: 'Episode 1',
            characters: [],
            air_date: 'December 2, 2013',
            created: '2017-11-10T12:56:33.798Z',
            episode: 'S01E01',
            url: 'https://rickandmortyapi.com/api/episode/1',
            character: {
              episode: [],
              gender: 'Female',
              image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
              location: {
                name: 'Earth (Replacement Dimension)',
                url: 'https://rickandmortyapi.com/api/location/20',
              },
              origin: {
                name: 'Earth (Replacement Dimension)',
                url: 'https://rickandmortyapi.com/api/location/20',
              },
              species: 'Human',
              status: 'Alive',
              type: '',
            },
          },
        ]),
    };

    TestBed.configureTestingModule({
      // The TestBed is used to configure and create an Angular testing module. Everything that is needed to create a component is included in the testing module
      declarations: [HomeScreenComponent, EpisodeCardComponent],
      providers: [
        {
          provide: EpisodesService,
          useValue: episodeServiceStub, // The stubbed service is provided to the testing module as the value of the EpisodesService
        },
      ],
    });
    fixture = TestBed.createComponent(HomeScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Not mandatory, but it is used to trigger change detection
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have episodes from observable', () => {
    component.episodes$.subscribe((episodes) => {
      expect(episodes.length).toBeGreaterThan(0);
    });
  });
});
