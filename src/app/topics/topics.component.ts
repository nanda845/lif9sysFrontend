import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../Service/login.service';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {
crs:any={}
add_topic=false;
tpc:any;
  constructor(private loginserve:LoginService, private router:Router) {
    this.crs.chapter_id=loginserve.chapterDetails.id
    this.crs.course_id=loginserve.chapterDetails.course_id

   }

  ngOnInit() {
    this.getTopics()
  }
  getTopics(){
    let data={'id':this.loginserve.chapterDetails.id}
    console.log("gc----",data)
    this.crs.topicName=''
    this.loginserve.getTopics(data).subscribe(
      backResponse => {
        this.tpc=backResponse
      },
      error => console.log("erroorrrr",error)
    );

  }
  add(){
    this.add_topic=true;
  }
    cancel(){
      this.add_topic=false;
      this.crs.topicName=''
    }
    addTopics(data){
      this.loginserve.addTopic(data).subscribe(
        backResponse => {
      this.add_topic=false;
          this.getTopics()    
        },
        error => console.log("erroorrrr",error)
      );
    }

    goToQuiz(data){
      console.log(data)
      this.loginserve.topicDetails=data;
      console.log(this.loginserve.chapterDetails)
      this.router.navigate(['/quiz'])
    }

}
