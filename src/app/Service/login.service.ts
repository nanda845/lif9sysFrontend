import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpErrorResponse} from  '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public loggedIn=false;
  loggedId='';
  course_id:any
  course_name:any;
  chapterDetails:any;
  topicDetails:any;
  QuiznameDetails:any;
  userCourse:any;
  userChapter:any;
  userTopic:any;
  userQuiz:any;
 constructor(public  Http:  HttpClient) {

   }
   private BASE_URL='http://127.0.0.1:8000';

    getToken(){
    return localStorage.getItem('token');
  }
   // login
  login(data){
    console.log('hiiiiiiiiiiiiiiiiiii',data);
    let url:string = `${this.BASE_URL}/loginuser/`;
    return  this.Http.post(url,data);

  }
  signup(data){
    console.log("register",data);
    let url:string = `${this.BASE_URL}/register/`;
    return  this.Http.post(url,data);

  }
  logout(data){
    let url:string = `${this.BASE_URL}/logoutuser/`;
    return  this.Http.post(url,data);
  }

  addcourse(data){
    let url:string = `${this.BASE_URL}/addcourse/`;
    return  this.Http.post(url,data);
  }

  teachergetcourse(){
    let url:string = `${this.BASE_URL}/teachergetcourse/`;
    return  this.Http.get(url);
  }
  getChapters(data){
    let url:string = `${this.BASE_URL}/getChapters/`;
    return  this.Http.post(url,data);
  }

  addChapter(data){
    let url:string = `${this.BASE_URL}/addChapter/`;
    return  this.Http.post(url,data);
  }

  getTopics(data){
    let url:string = `${this.BASE_URL}/getTopics/`;
    return  this.Http.post(url,data);
  }

  addTopic(data){
    let url:string = `${this.BASE_URL}/addTopic/`;
    return  this.Http.post(url,data);
  }

  getQuiz(data){
    let url:string = `${this.BASE_URL}/getQuiz/`;
    return  this.Http.post(url,data);
  }

  addQuiz(data){
    let url:string = `${this.BASE_URL}/addQuiz/`;
    return  this.Http.post(url,data);
  }

  getQuestions(data){
    let url:string = `${this.BASE_URL}/getQuestions/`;
    return  this.Http.post(url,data);
  }

  addQuestion(data){
    let url:string = `${this.BASE_URL}/addQuestion/`;
    return  this.Http.post(url,data);
  }
  usergetcourses(){
    let url:string = `${this.BASE_URL}/usergetcourses/`;
    return  this.Http.get(url);
  }
  subscribeCourse(data){
    let url:string = `${this.BASE_URL}/subscribeCourse/`;
    return  this.Http.post(url,data);
  }

  getUserChapters(data){
    let url:string = `${this.BASE_URL}/getUserChapters/`;
    return  this.Http.post(url,data);
  }

  getUserTopics(data){
    let url:string = `${this.BASE_URL}/getUserTopics/`;
    return  this.Http.post(url,data);
  }

  getUserQuizs(data){
    let url:string = `${this.BASE_URL}/getUserQuizs/`;
    return  this.Http.post(url,data);
  }

  getuserallQuestions(data){
    let url:string = `${this.BASE_URL}/getuserallQuestions/`;
    return  this.Http.post(url,data);
  }

  submitQuiz(data){
    let url:string = `${this.BASE_URL}/submitQuiz/`;
    return  this.Http.post(url,data);
  }

  getscore(data){
    let url:string = `${this.BASE_URL}/getscore/`;
    return  this.Http.post(url,data);
  }

  

}
