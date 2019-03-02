import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Service/login.service';
import {Router } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  data:any;
  courses:any;
  constructor(private loginserve:LoginService, private router:Router) { }

  ngOnInit() {
    this.getCourses()
  }
  getCourses(){
    this.loginserve.usergetcourses().subscribe(
      backResponse => {
        this.courses=backResponse
        console.log(backResponse)
      },
      error => console.log("erroorrrr",error)
    );
  }
  subscribeCourse(data){
    this.loginserve.subscribeCourse(data).subscribe(
      backResponse => {
        this.getCourses();
        console.log(backResponse)
      },
      error => console.log("erroorrrr",error)
    );
  }
  getChapters(data){
    this.loginserve.userCourse=data
    console.log("chapters-----------------")
    this.router.navigate(['/userChapters'])
  }

}
