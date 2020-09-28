import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Projet } from 'src/app/models/projet';
import { User } from 'src/app/models/User';
import { DashboardServiceService } from 'src/app/services/dashboard-service.service';
import { CreerProjetComponent } from '../dialog/creer-projet/creer-projet.component';

@Component({
  selector: 'app-gerer-projet',
  templateUrl: './gerer-projet.component.html',
  styleUrls: ['./gerer-projet.component.css']
})
export class GererProjetComponent implements OnInit {

  constructor(public dialog: MatDialog,private dashboardService:DashboardServiceService) { }

  ngOnInit(): void {
    this.afficherProjets()
  }
  projets:Projet[]=[]
  creerProjet(){
    
    const dialogRef = this.dialog.open(CreerProjetComponent, {
      width: '60%',

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }

  afficherProjets(){
    this.dashboardService.afficherProjets().subscribe((res:Projet[])=> {
      this.projets=res
    }
  )}


}
