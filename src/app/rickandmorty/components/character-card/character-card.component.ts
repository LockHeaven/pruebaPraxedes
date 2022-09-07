import { Component, Input, OnInit } from '@angular/core';
import { Character, ResultCharacter } from '../../interfaces/character.interface';
import { FavsService } from '../../services/favs.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent{

  @Input() character!: ResultCharacter;

  constructor( private favsService: FavsService ){
  }

  addFavorite(){
    const observacion = this.character.name + ' / Status: ' + this.character.status;
    console.log(observacion);
    console.log(this.character.id);

    this.favsService.addFavorites(this.character.id, observacion)
          .subscribe(ok =>{
            if(ok === true){
              Swal.fire('Agrgado exitosamente', 'El usuario se ha agregado a favoritos', 'success');
            } else {
              Swal.fire('Error', ok, 'error');
            }
          })
  }
}
