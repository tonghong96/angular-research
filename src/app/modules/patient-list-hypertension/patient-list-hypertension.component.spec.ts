import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientListHypertensionComponent } from './patient-list-hypertension.component';

describe('PatientListHypertensionComponent', () => {
  let component: PatientListHypertensionComponent;
  let fixture: ComponentFixture<PatientListHypertensionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientListHypertensionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientListHypertensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
