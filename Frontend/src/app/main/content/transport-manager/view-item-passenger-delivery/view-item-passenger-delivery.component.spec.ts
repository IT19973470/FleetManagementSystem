import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewItemPassengerDeliveryComponent } from './view-item-passenger-delivery.component';

describe('ViewItemPassengerDeliveryComponent', () => {
  let component: ViewItemPassengerDeliveryComponent;
  let fixture: ComponentFixture<ViewItemPassengerDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewItemPassengerDeliveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewItemPassengerDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
