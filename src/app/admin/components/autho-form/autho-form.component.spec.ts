import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthoFormComponent } from './autho-form.component';

describe('AuthoFormComponent', () => {
  let component: AuthoFormComponent;
  let fixture: ComponentFixture<AuthoFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AuthoFormComponent]
    });
    fixture = TestBed.createComponent(AuthoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
