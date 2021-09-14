import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportApplicationsComponent } from './transport-applications.component';

describe('TransportApplicationsComponent', () => {
  let component: TransportApplicationsComponent;
  let fixture: ComponentFixture<TransportApplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransportApplicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
