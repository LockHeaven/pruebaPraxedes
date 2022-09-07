import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required]],
    apellido: ['', [Validators.required,]],
    doctoIdent: ['', [Validators.required,]],
    username: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  })

  constructor( private fb: FormBuilder, private router: Router, private authService: AuthService ) { }

  ngOnInit(): void {
  }

  register(){
    const { username, password, nombre, apellido, doctoIdent } = this.miFormulario.value;

    this.authService.register( username, password, nombre, apellido, doctoIdent )
      .subscribe(ok => {
        if(ok === true) {
          this.router.navigateByUrl('/home');
        } else{
          Swal.fire('Error', ok, 'error');
        }
      })
  }
}
