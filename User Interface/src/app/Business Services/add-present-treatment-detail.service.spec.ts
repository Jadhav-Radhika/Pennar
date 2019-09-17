import { TestBed, inject } from '@angular/core/testing';

import { AddPresentTreatmentDetailService } from './add-present-treatment-detail.service';

describe('AddPresentTreatmentDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddPresentTreatmentDetailService]
    });
  });

  it('should be created', inject([AddPresentTreatmentDetailService], (service: AddPresentTreatmentDetailService) => {
    expect(service).toBeTruthy();
  }));
});
