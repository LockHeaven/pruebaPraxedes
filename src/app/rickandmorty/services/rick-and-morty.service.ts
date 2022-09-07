import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Episode, ResultEpisode } from '../interfaces/episode.interface';
import { Character, ResultCharacter } from '../interfaces/character.interface';


@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  private urlCharacter: string = environment.urlCharacter;
  private urlEpisode: string = environment.urlEpisode;


  constructor( private http: HttpClient ) { }

  getEpisodes(page: number = 1): Observable<Episode>{
    return this.http.get<Episode>(`${this.urlEpisode}`,
    {params :{
      page: page + 1
    }});
  }

  getCharacters(name: string = '', page: number = 1): Observable<Character>{
    return this.http.get<Character>(`${this.urlCharacter}`,
    {params :{
      name: name,
      page: page
    }});
  }

  getEpisode(id: number | string): Observable<ResultEpisode>{
    return this.http.get<ResultEpisode>(`${this.urlEpisode}/${id}`);
  }

  getCharForEpisode( characters: number[] | string[] ): Observable<ResultCharacter[]>{
    // const characters = [1,2,3,4]
    return this.http.get<ResultCharacter[]>(`${this.urlCharacter}/${ '/'+characters}`);
  }

}
