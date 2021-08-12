import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizeCalendarComponent } from './customize-calendar.component';

describe('CustomizeCalendarComponent', () => {
  let component: CustomizeCalendarComponent;
  let fixture: ComponentFixture<CustomizeCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomizeCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizeCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
