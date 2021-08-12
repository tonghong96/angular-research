import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupListModalComponent } from './group-list-modal.component';

describe('GroupListModalComponent', () => {
  let component: GroupListModalComponent;
  let fixture: ComponentFixture<GroupListModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupListModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupListModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
