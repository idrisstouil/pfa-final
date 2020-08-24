import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'projet-card',
  templateUrl: './projet-card.component.html',
  styleUrls: ['./projet-card.component.css']
})
export class ProjetCardComponent implements OnInit {

  @Input() titre:string
  @Input() description:string
  @Input() progress:number


  constructor() { }

  ngOnInit(): void {
  }

}
