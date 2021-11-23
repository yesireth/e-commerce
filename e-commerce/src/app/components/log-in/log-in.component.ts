import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import{AuthService} from '../../service/auth.service'


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  logInForm = new FormGroup({ 
    username: new FormControl('',Validators.required), 
    password: new FormControl('',Validators.required)
  }) 
  constructor(public router: Router, private AuthService: AuthService) { }

  ngOnInit(): void {


 
  }
 
  logIn(){

    this.AuthService.Auth(this.logInForm.value).subscribe(data =>{
      localStorage.setItem('token',data.token)
      console.log(data.token)})

  }

}
