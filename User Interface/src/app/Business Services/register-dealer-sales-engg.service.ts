import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { environment} from '../../environments/environment';
// import { RegisterDealer } from './register-dealer.model';
import { DealerRegister} from '../../../../Data Access Layer/models/DealerRegister.model'
import { DSEregister } from '../../../../Data Access Layer/models/DSEregister.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterDealerSalesEnggService {
  // selectedRegisterDealer : RegisterDealer = {
    selectedDealerSalesEngg : DSEregister = {
      _id : '',
      FirstName : '',
      LastName : '',
      Address : '',
      Email : '',
      MobileNumber : '',
      PANNumber : '',
      AdharNumber : '',
      DealerCode : '',
      Password : ''
    };
  

  constructor( private http : HttpClient ) { }

  // PostDealers(registerDealer:RegisterDealer)
  PostDealerSalesEngineer(registerDealerSalesEngg:DSEregister)
   {
    return this.http.post(environment.apiBaseUrl+'/RegisterDealerSalesEngineer',registerDealerSalesEngg);
   }
}
