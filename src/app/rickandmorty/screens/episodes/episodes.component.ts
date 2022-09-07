import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { merge, Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';

import { RickAndMortyService } from '../../services/rick-and-morty.service';
import { InfoEpisode, ResultEpisode } from '../../interfaces/episode.interface';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements AfterViewInit {

  displayedColumns: string[] = ['id', 'name', 'air_date', 'episode', 'link'];
  data: ResultEpisode[] = [];

  info: InfoEpisode = {
    next: null
  }

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  private pageNum: number = 1;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private ricksService: RickAndMortyService, private router: Router) {
  }

  ngAfterViewInit() {

    merge(this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.ricksService!.getEpisodes(
            this.paginator.pageIndex
          ).pipe(catchError(() => observableOf(null)));
        }),
        map(data => {

          this.isLoadingResults = false;
          this.isRateLimitReached = data === null;

          if (data === null) {
            return [];
          }

          this.resultsLength = data.info.count!;
          return data.results;
        }),
      )
      .subscribe(data => (this.data = data));
  }

}
