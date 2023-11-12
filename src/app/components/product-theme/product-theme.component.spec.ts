import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductThemeComponent } from './product-theme.component';

describe('ProductThemeComponent', () => {
  let component: ProductThemeComponent;
  let fixture: ComponentFixture<ProductThemeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ProductThemeComponent]
    });
    fixture = TestBed.createComponent(ProductThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
