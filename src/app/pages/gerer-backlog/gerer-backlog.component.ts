import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreerUserstoryComponent } from '../dialog/creer-userstory/creer-userstory.component';
import { CreerSprintComponent } from '../dialog/creer-sprint/creer-sprint.component';

@Component({
  selector: 'app-gerer-backlog',
  templateUrl: './gerer-backlog.component.html',
  styleUrls: ['./gerer-backlog.component.css']
})
export class GererBacklogComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  creerUser(){
    
    const dialogRef = this.dialog.open(CreerUserstoryComponent, {
      width: '60%',

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }
  creersprint(){
    
    const dialogRef = this.dialog.open(CreerSprintComponent, {
      width: '60%',

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }

}
