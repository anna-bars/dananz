import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminContactComponent } from './admin-contact.component';

describe('AdminContactComponent', () => {
  let component: AdminContactComponent;
  let fixture: ComponentFixture<AdminContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AdminContactComponent]
    });
    fixture = TestBed.createComponent(AdminContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
