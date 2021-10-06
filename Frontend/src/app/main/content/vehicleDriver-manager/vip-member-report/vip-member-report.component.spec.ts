import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VipMemberReportComponent } from './vip-member-report.component';

describe('VipMemberReportComponent', () => {
  let component: VipMemberReportComponent;
  let fixture: ComponentFixture<VipMemberReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VipMemberReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VipMemberReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
