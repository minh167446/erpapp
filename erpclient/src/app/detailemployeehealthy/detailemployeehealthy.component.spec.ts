import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailemployeehealthyComponent } from './detailemployeehealthy.component';

describe('DetailemployeehealthyComponent', () => {
  let component: DetailemployeehealthyComponent;
  let fixture: ComponentFixture<DetailemployeehealthyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailemployeehealthyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailemployeehealthyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
