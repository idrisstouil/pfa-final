import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { TokenService } from '../services/token.service';
import {authData} from './../models/authData'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth :AuthService,private token:TokenService,private router :Router) {
 
  }
  authdata:authData= {email: '', password: ''}

  ngOnInit(): void {

  }

login(){
 
  this.auth.login(this.authdata).subscribe(res=>{
    this.handleRes(res)
  })
}
handleRes(res){

this.token.handle(res)
this.router.navigateByUrl("/")

}
}
