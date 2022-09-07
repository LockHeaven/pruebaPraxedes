import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Favorites } from '../interfaces/favorites.interface';
import { catchError, map, Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavsService {

  private urlBase: string = environment.urlSeleccion;

  constructor( private http: HttpClient ) { }

  getFavorites(): Observable<Favorites[]>{
    const url = `${this.urlBase}/api/Favoritos`
    const headers = new HttpHeaders()
          .set('Authorization' , `Bearer ${localStorage.getItem('token') || ''} `);

    return this.http.get<Favorites[]>(url, { headers });
  }

  addFavorites( id: number, observaciones: string ){
    const url = `${this.urlBase}/api/Favoritos`
    const headers = new HttpHeaders()
          .set('Authorization' , `Bearer ${localStorage.getItem('token') || ''} `);
    
    const body = {
      "id_caracter": id,
      "observaciones": observaciones,
    }
    
    return this.http.post<Favorites[]>(url, body, { headers })
            .pipe(
              map( resp => true ),
              catchError( err => of(err.error.Message))
            )

  }

}
