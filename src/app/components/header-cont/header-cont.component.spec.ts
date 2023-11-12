import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderContComponent } from './header-cont.component';

describe('HeaderContComponent', () => {
  let component: HeaderContComponent;
  let fixture: ComponentFixture<HeaderContComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HeaderContComponent]
    });
    fixture = TestBed.createComponent(HeaderContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
