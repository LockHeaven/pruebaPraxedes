import { Component, OnInit } from '@angular/core';
import { FavsService } from '../../services/favs.service';
import { Favorites } from '../../interfaces/favorites.interface';

@Component({
  selector: 'app-favs',
  templateUrl: './favs.component.html',
  styleUrls: ['./favs.component.scss']
})
export class FavsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'observaciones', 'usuario', 'actions'];
  
  favorites: Favorites[] = [];
  
  flagTable: boolean = false;

  constructor( private favsService: FavsService ) { }

  ngOnInit(): void {
    this.getFavorites();
  }

  getFavorites(){
    this.flagTable = false;
    this.favsService.getFavorites()
        .subscribe((resp) => {
          this.favorites = resp;
        });
    this.flagTable = true;
  }

}
