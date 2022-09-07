import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { HomeComponent } from './screens/home/home.component';
import { ListComponent } from './screens/list/list.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';

import { MaterialModule } from '../material/material.module';
import { RickandmortyRoutingModule } from './rickandmorty-routing.module';
import { FavsComponent } from './screens/favs/favs.component';
import { EpisodesComponent } from './screens/episodes/episodes.component';
import { ListEpisodeComponent } from './screens/list-episode/list-episode.component';



@NgModule({
  declarations: [
    ListComponent,
    HomeComponent,
    CharacterCardComponent,
    FavsComponent,
    EpisodesComponent,
    ListEpisodeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    InfiniteScrollModule,
    RickandmortyRoutingModule
  ]
})
export class RickandmortyModule { }
