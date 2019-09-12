import { TestBed, inject } from '@angular/core/testing';

import { RegisterDealerSalesEnggService } from './register-dealer-sales-engg.service';

describe('RegisterDealerSalesEnggService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegisterDealerSalesEnggService]
    });
  });

  it('should be created', inject([RegisterDealerSalesEnggService], (service: RegisterDealerSalesEnggService) => {
    expect(service).toBeTruthy();
  }));
});
