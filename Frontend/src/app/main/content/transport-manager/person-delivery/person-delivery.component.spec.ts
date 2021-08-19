import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonDeliveryComponent } from './person-delivery.component';

describe('PersonDeliveryComponent', () => {
  let component: PersonDeliveryComponent;
  let fixture: ComponentFixture<PersonDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonDeliveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
