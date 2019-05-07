import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAllrecordComponent } from './employee-allrecord.component';

describe('EmployeeAllrecordComponent', () => {
  let component: EmployeeAllrecordComponent;
  let fixture: ComponentFixture<EmployeeAllrecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeAllrecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeAllrecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
