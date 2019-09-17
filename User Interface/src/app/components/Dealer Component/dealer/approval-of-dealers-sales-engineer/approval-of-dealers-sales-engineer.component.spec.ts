import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalOfDealersSalesEngineerComponent } from './approval-of-dealers-sales-engineer.component';

describe('ApprovalOfDealersSalesEngineerComponent', () => {
  let component: ApprovalOfDealersSalesEngineerComponent;
  let fixture: ComponentFixture<ApprovalOfDealersSalesEngineerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovalOfDealersSalesEngineerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalOfDealersSalesEngineerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
