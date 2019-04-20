import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteaempComponent } from './deleteaemp.component';

describe('DeleteaempComponent', () => {
  let component: DeleteaempComponent;
  let fixture: ComponentFixture<DeleteaempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteaempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteaempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
