import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminChooseComponent } from './admin-choose.component';

describe('AdminChooseComponent', () => {
  let component: AdminChooseComponent;
  let fixture: ComponentFixture<AdminChooseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AdminChooseComponent]
    });
    fixture = TestBed.createComponent(AdminChooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
