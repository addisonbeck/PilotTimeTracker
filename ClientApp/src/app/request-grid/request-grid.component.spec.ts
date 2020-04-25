import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestGridComponent } from './request-grid.component';

describe('RequestGridComponent', () => {
  let component: RequestGridComponent;
  let fixture: ComponentFixture<RequestGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
