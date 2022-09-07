import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { AuthInterface, Usuario } from '../interfaces/auth.interfaces';
import { map, catchError, tap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private urlLogin: string = environment.urlSecurity;
  private urlRegister: string = environment.urlSeleccion;

  private _usuario!: any;

  get usuario(){
    return this._usuario
  }

  constructor( private http: HttpClient ) { }

  register( email: string, password: string, nombre: string,
            apellido: string, doc: string ){
    
    const url = `${this.urlRegister}/api/SOL/RegistroInicialSolicitante`

    const body = {
      "nombre": nombre,
      "apellido": apellido,
      "doctoIdent": doc,
      "email": email,
      "clave": password,
      "cia": "10" 
    }

    return this.http.post<AuthInterface>(url, body)
      .pipe(
        tap( resp => {
          if(resp.token){
            localStorage.setItem('token', resp.token);
          }
        }),
        map( resp => true ),
        catchError( err => of(err.error.Message))
      )
  }

  login( email: string, password: string ){

    const url = `${this.urlLogin}/api/SEG`

    const body = {
        "password": password,
        "companyId": "10",
        "username": email,
        "desdeMs": true 
    }

    return this.http.post<AuthInterface>(url, body)
      .pipe(
        tap( resp => {
          if(resp.token){
            localStorage.setItem('token', resp.token);
          }
        }),
        map( resp => true ),
        catchError( err => of(err.error.message))
      )
  }

  validarToken(): Observable<boolean>{

    const url = `${this.urlLogin}/api/Values`;
    const headers = new HttpHeaders()
      .set('Authorization' , `Bearer ${localStorage.getItem('token') || ''} `);

    return this.http.get(url, { headers })
            .pipe(
              map(resp =>{
                this._usuario = resp || ''
                return true;
              }),
              catchError(err => of(false))
            );

  }

  logout(){
    localStorage.clear();
  }
}
