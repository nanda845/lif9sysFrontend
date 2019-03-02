import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../Service/login.service';
import { createScope } from '@angular/core/src/profile/wtf_impl';

@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.css']
})
export class ChaptersComponent implements OnInit {
  chap:any;
  crs:any={};
  add_chapter=false;
  constructor(private loginserve:LoginService, private router:Router) { 
    this.crs.course_id=loginserve.course_id
  }
  ngOnInit() {
    
    this.getChapters()
  }
  getChapters(){
    let data={'id':this.loginserve.course_id}
    console.log("gc----",data)
    this.crs.chapterName=''
    this.loginserve.getChapters(data).subscribe(
      backResponse => {
        this.chap=backResponse
      },
      error => console.log("erroorrrr",error)
    );

  }
  add(){
    this.add_chapter=true;
  }
    cancel(){
      this.add_chapter=false;
      this.crs.chapterName=''
    }
    addChapter(data){
      this.loginserve.addChapter(data).subscribe(
        backResponse => {
      this.add_chapter=false;
          this.getChapters()    
        },
        error => console.log("erroorrrr",error)
      );
    }

    goTotopics(data){
      console.log(data)
      this.loginserve.chapterDetails=data;
      console.log(this.loginserve.chapterDetails)
      this.router.navigate(['/topics'])
    }

}
