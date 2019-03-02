import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../Service/login.service';

@Component({
  selector: 'app-user-quizlist',
  templateUrl: './user-quizlist.component.html',
  styleUrls: ['./user-quizlist.component.css']
})
export class UserQuizlistComponent implements OnInit {
  allquizs:any;
  myscore:any;
  constructor(private loginserve:LoginService, private router:Router) { }

  ngOnInit() {
    this.getUserQuizs()
  }

  getUserQuizs(){
    let data={'id':this.loginserve.userTopic.id}
    this.loginserve.getUserQuizs(data).subscribe(
      backResponse => {
        this.allquizs=backResponse;
        console.log(backResponse)
      },
      error => console.log("erroorrrr",error)
    );
  }

  getquestions(data){
    this.loginserve.userQuiz=data
    console.log("chapters-----------------")
    this.router.navigate(['/userQuizQuestions'])
  }
  getscore(data){
    this.loginserve.getscore(data).subscribe(
      backResponse => {
        this.myscore=backResponse[0];
        data['score']=this.myscore.score;
        data['total']=this.myscore.total;
        console.log(backResponse,data)
      },
      error => console.log("erroorrrr",error)
    );
  }

}
