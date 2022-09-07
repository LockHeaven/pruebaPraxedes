import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Observable, take } from 'rxjs';
import { ResultCharacter } from '../../interfaces/character.interface';
import { RickAndMortyService } from '../../services/rick-and-morty.service';

@Component({
  selector: 'app-list-episode',
  templateUrl: './list-episode.component.html',
  styleUrls: ['./list-episode.component.scss']
})
export class ListEpisodeComponent implements OnInit {

  characters$!: Observable<ResultCharacter[]>;
  charactersId:string[] = [];
  flag: boolean = true;

  constructor(private ricksService: RickAndMortyService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.pipe( take(1)).subscribe((params) => {
      this.flag = true;
      const id = params['id'];
      this.ricksService.getEpisode(id)
        .subscribe((resp) => {
          this.charactersId = this.convertUrl(resp.characters);
          console.log(this.charactersId);
          this.characters$ = this.ricksService.getCharForEpisode(this.charactersId);
          this.flag = false;
        });
    });
  }

  private convertUrl(array: string[]){
    let arrayId = [];
    let spl;
    for (let i = 0; i < array.length; i++) {
      spl = array[i].split('/');
      arrayId.push(spl[spl.length - 1])
    }
    return arrayId;
  }


}
