import { Component, OnInit } from '@angular/core';
import { DashboardServiceService } from 'src/app/services/dashboard-service.service';
import { TokenService } from 'src/app/services/token.service';
import {Projet} from './../../../models/projet'
import {User} from './../../../models/User'

@Component({
  selector: 'app-creer-projet',
  templateUrl: './creer-projet.component.html',
  styleUrls: ['./creer-projet.component.css']
})
export class CreerProjetComponent implements OnInit {

  user :User={
    name:'',
    email:'',
    id:''
  }
  projet:Projet={
    name:'',
    description:'',
    date_debut:new Date(),
    date_fin:new Date()
    // users : [this.user]
}
 
  constructor(private dashboardService:DashboardServiceService,private token:TokenService) {
   
   }

  ngOnInit(): void {
  }
  creerProjet(){
    this.dashboardService.creerProjet(this.projet).subscribe(res=>console.log(res))
  }

}
