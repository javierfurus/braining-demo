import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EpisodeCardComponent } from './episode-card.component';
import { EpisodeWithCharacter } from 'src/app/interfaces/episode-with-character.interface';

describe('EpisodeCardComponent', () => {
  let component: EpisodeCardComponent;
  let fixture: ComponentFixture<EpisodeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EpisodeCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodeCardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an episode input', () => {
    const episode: EpisodeWithCharacter = {
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
    };
    component.episode = episode;
    fixture.detectChanges();
    expect(fixture.componentInstance.episode.name).toBeDefined();
  });

  it('should have Episode 1', () => {
    const episode: EpisodeWithCharacter = {
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
    };
    component.episode = episode;
    fixture.detectChanges();
    expect(fixture.componentInstance.episode.name).toBe('Episode 1');
  });
});
