import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { RickAndMortyService } from '../../services/rick-and-morty.service';
import { Episode } from '../../interfaces/episode.interface';
import { ResultCharacter, InfoCharacter } from '../../interfaces/character.interface';
import { filter, take } from 'rxjs';
import { ActivatedRoute, NavigationEnd, Params, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { FavsService } from '../../services/favs.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  characters: ResultCharacter[] = [];
  info: InfoCharacter = {
    next: null
  }

  private pageNum: number = 1;
  private name: string = '';

  flag: boolean = true;

  showGoUpButton = false;
  private hideScrollHeight = 200;
  private showScrollHeight = 500;

  constructor(private ricksService: RickAndMortyService, 
    private route: ActivatedRoute, private router: Router,
    @Inject(DOCUMENT) private document: Document) {

    this.getCharacters();

  }

  ngOnInit(): void {
  }


  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const yOffSet = window.pageYOffset;
    if ((yOffSet || this.document.documentElement.scrollTop || this.document.body.scrollTop) > this.showScrollHeight) {
      this.showGoUpButton = true;
    } else if (this.showGoUpButton && (yOffSet || this.document.documentElement.scrollTop || this.document.body.scrollTop) < this.hideScrollHeight){
      this.showGoUpButton = false;
    }
  }

  onScrollDown(): void {  
    if (this.info.next) {
      this.pageNum++;
      this.getCharacters();
    }
  }

  onScrollTop(): void {
    this.document.body.scrollTop = 0; //Safari
    this.document.documentElement.scrollTop = 0; //Other 
  }

  private getCharacters() {
    this.flag = true;
    this.ricksService.getCharacters(this.name, this.pageNum)
      .pipe(
        take(1)
      ).subscribe((res) => {
        if (res?.results?.length) {
          const { info, results } = res;
          this.characters = [...this.characters, ...results];
          this.info = info;
          this.flag = false;
        } else {
          this.characters = [];
          this.flag = false;
        }
      }
      );
  }





}
