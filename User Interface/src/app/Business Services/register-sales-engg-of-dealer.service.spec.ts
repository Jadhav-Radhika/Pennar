import { TestBed, inject } from '@angular/core/testing';

import { RegisterSalesEnggOfDealerService } from './register-sales-engg-of-dealer.service';

describe('RegisterSalesEnggOfDealerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegisterSalesEnggOfDealerService]
    });
  });

  it('should be created', inject([RegisterSalesEnggOfDealerService], (service: RegisterSalesEnggOfDealerService) => {
    expect(service).toBeTruthy();
  }));
});
