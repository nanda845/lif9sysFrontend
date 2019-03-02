import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Service/login.service';
import {Router } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  loginpage=true
  signupPage=false
  login:any={};
  signup:any={}
  constructor( private loginserve:LoginService, public router:Router) { 
    
  }

  ngOnInit() {
    this.loginpage=true
    this.signupPage=false
  }

  enSignUp(){
    this.loginpage=false
    this.signupPage=true
  }
  enlogin(){
    this.loginpage=true
    this.signupPage=false
  }
  private token:any;
  log_in(data){
    this.loginserve.login(data).subscribe(
      backResponse => {
        localStorage.setItem('token',backResponse['token']);
        this.loginserve.loggedIn=true;
        this.loginserve.loggedId=backResponse['user_id'];
        if (backResponse['role']=='teacher'){
          this.router.navigate(['/teacherdashboard'])
        }else{
          this.router.navigate(['/userdashboard'])

        }      
      },
      error => console.log("erroorrrr",error)
    );

  }

  sign_up(data){
    this.loginserve.signup(data).subscribe(
      backResponse => {
        alert("Registered Successfully") 
        this.loginpage=true
        this.signupPage=false       
      },
      error => console.log("erroorrrr",error)
    );
  }

}
