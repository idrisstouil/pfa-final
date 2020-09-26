import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import {authData} from './../models/authData'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(authData:authData) {
    return this.http.post('http://localhost:8080/users/login', authData);
  }

}
