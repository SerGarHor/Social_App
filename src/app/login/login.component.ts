import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private router: Router,
    private _snackBar: MatSnackBar) { }

  login() {
    this.authService.loginUser({ "email": this.email, "password": this.password })
      .subscribe((res: any) => {
        if (res.status == 200) {
          localStorage.setItem('token', res.token)
          localStorage.setItem('user', JSON.stringify(res.data))
          this._snackBar.open(res.message, 'x')
          setTimeout(() => {
            this._snackBar.dismiss();
          }, 4000);
          this.router.navigate(['home'])
        }
      })

  }
}