import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreerProjetComponent } from '../dialog/creer-projet/creer-projet.component';

@Component({
  selector: 'app-gerer-projet',
  templateUrl: './gerer-projet.component.html',
  styleUrls: ['./gerer-projet.component.css']
})
export class GererProjetComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  creerProjet(){
    
    const dialogRef = this.dialog.open(CreerProjetComponent, {
      width: '60%',

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }


}
