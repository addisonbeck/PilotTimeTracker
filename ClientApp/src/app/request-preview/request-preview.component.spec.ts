import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestPreviewComponent } from './request-preview.component';

describe('RequestPreviewComponent', () => {
  let component: RequestPreviewComponent;
  let fixture: ComponentFixture<RequestPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
