import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateItemPassengerDeliveryComponent } from './update-item-passenger-delivery.component';

describe('UpdateItemPassengerDeliveryComponent', () => {
  let component: UpdateItemPassengerDeliveryComponent;
  let fixture: ComponentFixture<UpdateItemPassengerDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateItemPassengerDeliveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateItemPassengerDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
