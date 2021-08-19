import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageDeliveryComponent } from './manage-delivery.component';

describe('ManageDeliveryComponent', () => {
  let component: ManageDeliveryComponent;
  let fixture: ComponentFixture<ManageDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageDeliveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
