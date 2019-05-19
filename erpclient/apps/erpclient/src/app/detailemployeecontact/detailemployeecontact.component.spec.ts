import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailemployeecontactComponent } from './detailemployeecontact.component';

describe('DetailemployeecontactComponent', () => {
  let component: DetailemployeecontactComponent;
  let fixture: ComponentFixture<DetailemployeecontactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailemployeecontactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailemployeecontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
