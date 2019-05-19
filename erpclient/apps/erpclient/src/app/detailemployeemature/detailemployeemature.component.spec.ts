import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailemployeematureComponent } from './detailemployeemature.component';

describe('DetailemployeematureComponent', () => {
  let component: DetailemployeematureComponent;
  let fixture: ComponentFixture<DetailemployeematureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailemployeematureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailemployeematureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
