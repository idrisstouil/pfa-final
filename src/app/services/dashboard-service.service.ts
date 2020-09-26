import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Projet } from '../models/projet';

@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {

  constructor(private http:HttpClient) { }

  creerProjet(projet:Projet){
    console.log(projet)
   return this.http.post('http://localhost:8080/dashboard/projet',projet)
  }
}
