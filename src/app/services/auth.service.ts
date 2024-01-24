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

  register(user: { username: string; password: string }) {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  login(user: { username: string; password: string }) {

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers, withCredentials: true };

    return this.http.post(`${this.apiUrl}/login`, user, options);
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    const token = this.getToken();
    return token && !this.jwtHelper.isTokenExpired(token);
  }

  logout() {
    localStorage.removeItem('token');
  }
}
