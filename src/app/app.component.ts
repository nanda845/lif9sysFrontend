import { Component } from '@angular/core';
import { LoginService } from './Service/login.service';
import {Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'frontend';
  data:any;
  constructor(private loginservice:LoginService, private router:Router){}
  logout(){
    this.data={'hi':'hi'}
    this.loginservice.logout(this.data).subscribe(
      backResponse => {
        localStorage.removeItem('token');
        this.loginservice.loggedIn=false;
        this.loginservice.loggedId=''
        this.router.navigate([''])      
      },
      error => console.log("erroorrrr",error)
    );
  }
}
