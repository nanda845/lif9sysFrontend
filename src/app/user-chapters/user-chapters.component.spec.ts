import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserChaptersComponent } from './user-chapters.component';

describe('UserChaptersComponent', () => {
  let component: UserChaptersComponent;
  let fixture: ComponentFixture<UserChaptersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserChaptersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserChaptersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
