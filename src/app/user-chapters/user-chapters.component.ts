import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../Service/login.service';

@Component({
  selector: 'app-user-chapters',
  templateUrl: './user-chapters.component.html',
  styleUrls: ['./user-chapters.component.css']
})
export class UserChaptersComponent implements OnInit {
  allchapters:any;
  constructor(private loginserve:LoginService, private router:Router) { }

  ngOnInit() {
    this.getUserChapters()
  }
  getUserChapters(){
    let data={'id':this.loginserve.userCourse.id}
    this.loginserve.getUserChapters(data).subscribe(
      backResponse => {
        this.allchapters=backResponse;
        console.log(backResponse)
      },
      error => console.log("erroorrrr",error)
    );
  }

  getTopics(data){
    this.loginserve.userChapter=data
    console.log("chapters-----------------")
    this.router.navigate(['/userTopics'])
  }

}
