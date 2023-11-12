import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyInformComponent } from './company-inform.component';

describe('CompanyInformComponent', () => {
  let component: CompanyInformComponent;
  let fixture: ComponentFixture<CompanyInformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CompanyInformComponent]
    });
    fixture = TestBed.createComponent(CompanyInformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
