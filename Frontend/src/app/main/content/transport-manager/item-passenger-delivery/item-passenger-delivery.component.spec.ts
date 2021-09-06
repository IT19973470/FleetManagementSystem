import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPassengerDeliveryComponent } from './item-passenger-delivery.component';

describe('ItemPassengerDeliveryComponent', () => {
  let component: ItemPassengerDeliveryComponent;
  let fixture: ComponentFixture<ItemPassengerDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemPassengerDeliveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPassengerDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
