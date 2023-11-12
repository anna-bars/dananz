import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioBlockComponent } from './portfolio-block.component';

describe('PortfolioBlockComponent', () => {
  let component: PortfolioBlockComponent;
  let fixture: ComponentFixture<PortfolioBlockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PortfolioBlockComponent]
    });
    fixture = TestBed.createComponent(PortfolioBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
