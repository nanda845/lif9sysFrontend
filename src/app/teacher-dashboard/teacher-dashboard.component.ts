import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Service/login.service';
import {Router } from '@angular/router';


@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.css']
})
export class TeacherDashboardComponent implements OnInit {
  data:any;
  crs:any={}
  course:any
  add_course=false;
  constructor(private loginserve:LoginService, private router:Router) { }

  ngOnInit() {
    this.getCourse()    

  }

getCourse(){
  this.add_course=false;
  this.loginserve.teachergetcourse().subscribe(
    backResponse => {
      this.course=backResponse
    },
    error => console.log("erroorrrr",error)
  );
}
addCourse(data){
  this.loginserve.addcourse(data).subscribe(
    backResponse => {
      this.crs={}
      this.getCourse()    
    },
    error => console.log("erroorrrr",error)
  );
}
add(){
  this.add_course=true;
}
  cancel(){
    this.add_course=false;
    this.crs={}
  }

  goToChapters(data){
    console.log(data)
    this.loginserve.course_id=data.id;
    this.loginserve.course_name=data.name;
    console.log(this.loginserve.course_name)
    this.router.navigate(['/chapters'])
  }
}
