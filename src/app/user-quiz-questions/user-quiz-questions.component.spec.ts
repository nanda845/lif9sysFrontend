import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserQuizQuestionsComponent } from './user-quiz-questions.component';

describe('UserQuizQuestionsComponent', () => {
  let component: UserQuizQuestionsComponent;
  let fixture: ComponentFixture<UserQuizQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserQuizQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserQuizQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
