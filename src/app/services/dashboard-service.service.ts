import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Projet } from '../models/projet';

@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {

  constructor(private http:HttpClient) { }

  creerProjet(projet:Projet){
   return this.http.post('http://localhost:8080/dashboard/projet',projet)
  }

  afficherProjets(){
    return this.http.get('http://localhost:8080/dashboard/projet')

  }

  afficherProjet(id:Number){
    return this.http.get('http://localhost:8080/dashboard/projet/'+`${id}`)
  }
  }
