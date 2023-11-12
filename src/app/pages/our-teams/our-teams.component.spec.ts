import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurTeamsComponent } from './our-teams.component';

describe('OurTeamsComponent', () => {
  let component: OurTeamsComponent;
  let fixture: ComponentFixture<OurTeamsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [OurTeamsComponent]
    });
    fixture = TestBed.createComponent(OurTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
