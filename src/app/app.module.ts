import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';


import{ LoginService } from './Service/login.service';
import {AuthenticationInterceptService} from './Service/authentication-intercept.service';
import { FormsModule } from '@angular/forms';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ChaptersComponent } from './chapters/chapters.component';
import { TopicsComponent } from './topics/topics.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuizQuestionsComponent } from './quiz-questions/quiz-questions.component';
import { UserChaptersComponent } from './user-chapters/user-chapters.component';
import { UserTopicsComponent } from './user-topics/user-topics.component';
import { UserQuizlistComponent } from './user-quizlist/user-quizlist.component';
import { UserQuizQuestionsComponent } from './user-quiz-questions/user-quiz-questions.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TeacherDashboardComponent,
    UserDashboardComponent,
    ChaptersComponent,
    TopicsComponent,
    QuizComponent,
    QuizQuestionsComponent,
    UserChaptersComponent,
    UserTopicsComponent,
    UserQuizlistComponent,
    UserQuizQuestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],


   providers: [LoginService,{

      provide:HTTP_INTERCEPTORS,useClass:AuthenticationInterceptService,multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
