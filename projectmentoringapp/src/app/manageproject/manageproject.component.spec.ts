import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageprojectComponent } from './manageproject.component';

describe('ManageprojectComponent', () => {
  let component: ManageprojectComponent;
  let fixture: ComponentFixture<ManageprojectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageprojectComponent]
    });
    fixture = TestBed.createComponent(ManageprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
