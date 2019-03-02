import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../Service/login.service';

@Component({
  selector: 'app-user-quiz-questions',
  templateUrl: './user-quiz-questions.component.html',
  styleUrls: ['./user-quiz-questions.component.css']
})
export class UserQuizQuestionsComponent implements OnInit {
  allQstn:any;
  constructor(private loginserve:LoginService, private router:Router) { }

  ngOnInit() {
    this.getallQuestions()
  }

  getallQuestions(){
    let data={'id':this.loginserve.userQuiz.id}
    this.loginserve.getuserallQuestions(data).subscribe(
      backResponse => {
        this.allQstn=backResponse;
        for (var i in this.allQstn){
          this.allQstn[i].selectedanswer=''
        }
        console.log(this.allQstn)
      },
      error => console.log("erroorrrr",error)
    );
  }

  submitQuiz(data){
    console.log(data,data.length)
    this.loginserve.submitQuiz(data).subscribe(
      backResponse => {
        alert("Successfully submitted, your score is"+backResponse+'/'+data.length+'.')
        this.router.navigate(['/userQuizList'])
      },
      error => console.log("erroorrrr",error)
    );
  }

}
