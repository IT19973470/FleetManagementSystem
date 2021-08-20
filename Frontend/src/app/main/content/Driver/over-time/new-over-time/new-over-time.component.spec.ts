import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOverTimeComponent } from './new-over-time.component';

describe('NewOverTimeComponent', () => {
  let component: NewOverTimeComponent;
  let fixture: ComponentFixture<NewOverTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewOverTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOverTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
