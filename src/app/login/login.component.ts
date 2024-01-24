import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login({ username: this.username, password: this.password }).subscribe(
      (data: any) => {  // Cambiado a 'any' para evitar problemas de tipado
        this.authService.saveToken(data.token);
        this.router.navigate(['/']);
      },
      (error) => {
        console.error('error xd',error);
        // Maneja errores de autenticación aquí
      }
    );
  }
}