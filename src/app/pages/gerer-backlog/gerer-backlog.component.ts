import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreerUserstoryComponent } from '../dialog/creer-userstory/creer-userstory.component';
import { CreerSprintComponent } from '../dialog/creer-sprint/creer-sprint.component';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

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

  
  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  review = [
    'Take bath',
    'Wash car',
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

}
