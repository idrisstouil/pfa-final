import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Projet } from 'src/app/models/projet';
import { User } from 'src/app/models/User';
import { DashboardServiceService } from 'src/app/services/dashboard-service.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-projet',
  templateUrl: './view-projet.component.html',
  styleUrls: ['./view-projet.component.css']
})
export class ViewProjetComponent implements OnInit {
  userss :any[]=[]
  AllUsers:any[]=[]
  id:number;
  projet:any={
    name:'',
    description:'',
    date_debut:new Date,
    date_fin:new Date,
    users:this.userss
    }



  constructor(private userService:UserService,private dashboardService:DashboardServiceService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id=+this.route.snapshot.paramMap.get('id')
    console.log(this.id)
    this.getProjet(this.id)
    this.getUsers()
  }
  getUsers(){
    this.userService.getUsers().subscribe(res=>{
      this.AllUsers.push(res)
      console.log( this.AllUsers)
   })
  }

  getProjet(id){
    this.dashboardService.afficherProjet(id).subscribe(res=>{
    this.projet=res
    })
  }
}
