import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoacFormComponent } from './loac-form.component';

describe('LoacFormComponent', () => {
  let component: LoacFormComponent;
  let fixture: ComponentFixture<LoacFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LoacFormComponent]
    });
    fixture = TestBed.createComponent(LoacFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
