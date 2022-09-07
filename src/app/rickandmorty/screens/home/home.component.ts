import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Usuario } from '../../../auth/interfaces/auth.interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private router: Router, private authService: AuthService ) { }

  get usuario(){
    return this.authService.usuario;
  }

  ngOnInit(): void {
  }

  logOut(){
    this.authService.logout();
    this.router.navigateByUrl('/auth')
  }

}
