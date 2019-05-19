import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostemployeeComponent } from './postemployee.component';

describe('PostemployeeComponent', () => {
  let component: PostemployeeComponent;
  let fixture: ComponentFixture<PostemployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostemployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
