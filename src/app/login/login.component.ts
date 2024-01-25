import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(
    private authService: AuthService, 
    private router: Router) {}

  login() {
    this.authService.loginUser({"email": this.email, "password": this.password})
    .subscribe((res: any) =>{
      localStorage.setItem('token', res.token)
      this.router.navigate(['home'])
    })
    
  }
}