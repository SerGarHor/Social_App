import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {
  fullname: string = '';
  age: number = 0;
  email: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) { }

  register() {
    this.authService.createUser({ email: this.email, age: this.age, fullname: this.fullname, password: this.password })
      .subscribe((res: any) => {
        if (res.status == 200) {
          this._snackBar.open(res.message, 'x')
          setTimeout(() => {
            this._snackBar.dismiss();
          }, 4000);
          this.router.navigate(['login'])
        }
      })
  }

}
