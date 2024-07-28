import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LashesPriceListComponent } from './lashes-price-list.component';

describe('LashesPriceListComponent', () => {
  let component: LashesPriceListComponent;
  let fixture: ComponentFixture<LashesPriceListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LashesPriceListComponent]
    });
    fixture = TestBed.createComponent(LashesPriceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
