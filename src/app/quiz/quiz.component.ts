import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../Service/login.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  crs:any={}
  add_quiz=false;
  qz:any;
  constructor(private loginserve:LoginService, private router:Router) { 
    this.crs.chapter_id=loginserve.topicDetails.chapter_id
    this.crs.course_id=loginserve.topicDetails.course_id
    this.crs.topic_id=loginserve.topicDetails.id
  }

  ngOnInit() {
    this.getQuiz()
  }

  getQuiz(){
    let data={'id':this.loginserve.topicDetails.id}
    console.log("gc----",data)
    this.crs.quiz_name=''
    this.loginserve.getQuiz(data).subscribe(
      backResponse => {
        this.qz=backResponse
      },
      error => console.log("erroorrrr",error)
    );

  }
  add(){
    this.add_quiz=true;
  }
    cancel(){
      this.add_quiz=false;
      this.crs.quiz_name=''
    }
    addQuiz(data){
      this.loginserve.addQuiz(data).subscribe(
        backResponse => {
      this.add_quiz=false;
          this.getQuiz()    
        },
        error => console.log("erroorrrr",error)
      );
    }

    goQuestions(data){
      console.log(data)
      this.loginserve.QuiznameDetails=data;
      console.log(this.loginserve.QuiznameDetails)
      this.router.navigate(['/quizQuestions'])
    }


}
