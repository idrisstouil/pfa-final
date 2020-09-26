import { Component, OnInit } from '@angular/core';
import { DashboardServiceService } from 'src/app/services/dashboard-service.service';
import {Projet} from './../../../models/projet'
@Component({
  selector: 'app-creer-projet',
  templateUrl: './creer-projet.component.html',
  styleUrls: ['./creer-projet.component.css']
})
export class CreerProjetComponent implements OnInit {

  projet:Projet={
    name:'',
    description:'',
    date_debut:new Date(),
    date_fin:new Date()
}
 
  constructor(private dashboardService:DashboardServiceService) {
   
    
   }


  ngOnInit(): void {
  }
  creerProjet(){
    this.dashboardService.creerProjet(this.projet).subscribe(res=>console.log(res))
  }

}
