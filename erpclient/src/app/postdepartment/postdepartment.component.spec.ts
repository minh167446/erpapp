import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostdepartmentComponent } from './postdepartment.component';

describe('PostdepartmentComponent', () => {
  let component: PostdepartmentComponent;
  let fixture: ComponentFixture<PostdepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostdepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostdepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
