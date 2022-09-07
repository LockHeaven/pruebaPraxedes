import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './screens/home/home.component';
import { ListComponent } from './screens/list/list.component';
import { FavsComponent } from './screens/favs/favs.component';
import { EpisodesComponent } from './screens/episodes/episodes.component';
import { ListEpisodeComponent } from './screens/list-episode/list-episode.component';

const rutas: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'list', component: ListComponent },
      { path: 'episodes', component: EpisodesComponent },
      { path: 'episodes/:id', component: ListEpisodeComponent },
      { path: 'favorites', component: FavsComponent },
      { path: '**', redirectTo: 'list' }
    ]
  }
];


@NgModule({
  imports: [
    RouterModule.forChild( rutas )
  ], 
  exports: [
    RouterModule
  ]
})
export class RickandmortyRoutingModule { }
