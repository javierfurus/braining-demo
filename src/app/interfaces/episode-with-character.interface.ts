import { Character } from './character.interface';
import { Episode } from './episode.interface';

export interface EpisodeWithCharacter extends Episode {
  character: Character;
}
