import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../Service/login.service';

@Component({
  selector: 'app-user-topics',
  templateUrl: './user-topics.component.html',
  styleUrls: ['./user-topics.component.css']
})
export class UserTopicsComponent implements OnInit {
  alltopics:any;
  constructor(private loginserve:LoginService, private router:Router) { }

  ngOnInit() {
    this.getUserChapters()
  }

  getUserChapters(){
    let data={'id':this.loginserve.userChapter.id}
    this.loginserve.getUserTopics(data).subscribe(
      backResponse => {
        this.alltopics=backResponse;
        console.log(backResponse)
      },
      error => console.log("erroorrrr",error)
    );
  }

  getQuizs(data){
    this.loginserve.userTopic=data
    console.log("chapters-----------------")
    this.router.navigate(['/userQuizList'])
  }

}
