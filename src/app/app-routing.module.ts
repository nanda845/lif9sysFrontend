import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { ChaptersComponent } from './chapters/chapters.component';
import { QuizComponent } from './quiz/quiz.component';
import { TopicsComponent } from './topics/topics.component';
import { QuizQuestionsComponent } from './quiz-questions/quiz-questions.component';
import { UserChaptersComponent } from './user-chapters/user-chapters.component';
import { UserQuizQuestionsComponent } from './user-quiz-questions/user-quiz-questions.component';
import { UserQuizlistComponent } from './user-quizlist/user-quizlist.component';
import { UserTopicsComponent } from './user-topics/user-topics.component';

const routes: Routes = [
  {
    path:'',
    component:UserComponent
  },
  {
    path:'userdashboard',
    component:UserDashboardComponent
  },
  {
    path:'teacherdashboard',
    component:TeacherDashboardComponent
  },
  {
    path:'chapters',
    component:ChaptersComponent
  },
  {
    path:'quiz',
    component:QuizComponent
  },
  {
    path:'topics',
    component:TopicsComponent
  },
  {
    path:'quizQuestions',
    component:QuizQuestionsComponent
  },
  {
    path:'userChapters',
    component:UserChaptersComponent
  },
  {
    path:'userQuizQuestions',
    component:UserQuizQuestionsComponent
  },
  {
    path:'userQuizList',
    component:UserQuizlistComponent
  },
  {
    path:'userTopics',
    component:UserTopicsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
