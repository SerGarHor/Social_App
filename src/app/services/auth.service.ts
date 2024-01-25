import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000'; 
  private jwtHelper = new JwtHelperService();

  constructor(private http: HttpClient) {}

  //Por cuestiones de tiempo no he realizado el respectivo tipado en los parametros

  getUsers(){

  }

  loginUser(user: any){
    return this.http.post(`${this.apiUrl}/singin`, user)
  }



}
