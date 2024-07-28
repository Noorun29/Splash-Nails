import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BraidsPriceListComponent } from './braids-price-list.component';

describe('BraidsPriceListComponent', () => {
  let component: BraidsPriceListComponent;
  let fixture: ComponentFixture<BraidsPriceListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BraidsPriceListComponent]
    });
    fixture = TestBed.createComponent(BraidsPriceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
