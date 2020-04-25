import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerQueueComponent } from './manager-queue.component';

describe('ManagerQueueComponent', () => {
  let component: ManagerQueueComponent;
  let fixture: ComponentFixture<ManagerQueueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerQueueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
