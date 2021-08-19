import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPersonDeliveryComponent } from './view-person-delivery.component';

describe('ViewPersonDeliveryComponent', () => {
  let component: ViewPersonDeliveryComponent;
  let fixture: ComponentFixture<ViewPersonDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPersonDeliveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPersonDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
