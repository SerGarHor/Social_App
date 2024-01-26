import { Injectable, signal } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private jwtHelper = new JwtHelperService()
  private apiUrl = 'http://localhost:3000';
  constructor(
    private http: HttpClient,

  ) { }

  //Por cuestiones de tiempo no he realizado el respectivo tipado en los parametros

  getUsers() {

  }

  loginUser(user: any) {
    return this.http.post(`${this.apiUrl}/singin`, user)
  }

  createUser(user: any) {
    return this.http.post(`${this.apiUrl}/register`, user)
  }

  filterPublication(data: string) {
    const params = new HttpParams().set('data', data);
    return this.http.get(`${this.apiUrl}/filter`, { params })
  }

  getPublications() {
    return this.http.get(`${this.apiUrl}/publication`)
  }

  getNameUser(id: number) {
    const params = new HttpParams().set('id', id);
    return this.http.get(`${this.apiUrl}/nameuser`, { params })
  }

  createPublication(data: any) {
    return this.http.post(`${this.apiUrl}/createpublication`, data)
  }

  updatePublication(data: any) {
    return this.http.put(`${this.apiUrl}/updatepublication`, data)
  }

  deletePublication(id: number) {
    const params = new HttpParams().set('id', id.toString());
    return this.http.delete(`${this.apiUrl}/deletepublication`, { params });
  }

  getUserUpdate(id: number) {
    const params = new HttpParams().set('id', id);
    return this.http.get(`${this.apiUrl}/userupdate`, { params })
  }

  updateUser(data: any) {
    return this.http.put(`${this.apiUrl}/updateuser`, data)
  }

}
