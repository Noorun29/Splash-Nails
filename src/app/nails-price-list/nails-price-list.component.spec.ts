import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NailsPriceListComponent } from './nails-price-list.component';

describe('NailsPriceListComponent', () => {
  let component: NailsPriceListComponent;
  let fixture: ComponentFixture<NailsPriceListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NailsPriceListComponent]
    });
    fixture = TestBed.createComponent(NailsPriceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
