import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserQuizlistComponent } from './user-quizlist.component';

describe('UserQuizlistComponent', () => {
  let component: UserQuizlistComponent;
  let fixture: ComponentFixture<UserQuizlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserQuizlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserQuizlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
