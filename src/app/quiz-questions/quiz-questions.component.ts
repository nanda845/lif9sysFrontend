import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../Service/login.service';

@Component({
  selector: 'app-quiz-questions',
  templateUrl: './quiz-questions.component.html',
  styleUrls: ['./quiz-questions.component.css']
})
export class QuizQuestionsComponent implements OnInit {
  add_qstn=false;
  crs:any={}
  allQstn:any;
  constructor(private loginserve:LoginService, private router:Router) { 
    this.crs.topic_id=loginserve.QuiznameDetails.topic_id
    this.crs.quiz_id=loginserve.QuiznameDetails.id
  }

  ngOnInit() {
    this.getQuestions()
  }

  getQuestions(){
    let data={'id':this.loginserve.QuiznameDetails.id}
    console.log("gc----",data)
    this.crs.question=''
    this.crs.answer=''
    this.crs.A=''
    this.crs.B=''
    this.crs.C=''
    this.crs.D=''
    this.loginserve.getQuestions(data).subscribe(
      backResponse => {
        this.allQstn=backResponse
      },
      error => console.log("erroorrrr",error)
    );

  }
  add(){
    this.add_qstn=true;
  }
    cancel(){
      this.add_qstn=false;
      this.crs.question=''
      this.crs.answer=''
      this.crs.A=''
      this.crs.B=''
      this.crs.C=''
      this.crs.D=''
    }
    addQuestion(data){
      console.log(data)
      this.loginserve.addQuestion(data).subscribe(
        backResponse => {
      this.add_qstn=false;
          this.getQuestions()    
        },
        error => console.log("erroorrrr",error)
      );
    }

}
