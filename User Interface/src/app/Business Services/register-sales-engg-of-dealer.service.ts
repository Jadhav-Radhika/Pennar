import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { environment} from '../../environments/environment';
import { DealersSalesEngg } from '../../../../Data Access Layer/models/DealersSalesEngg.model';
@Injectable({
  providedIn: 'root'
})
export class RegisterSalesEnggOfDealerService {

 
  SalesEnggOfDealer: DealersSalesEngg[];
      selectedDealersSalesEngg : DealersSalesEngg = {
     _id : '',
      FirstName : '',
      LastName : '',
      Address : '',
      Email : '',
      MobileNumber : '',
      PANNumber : '',
      AdharNumber : '',
      Password : ''
   };  

  constructor( private http : HttpClient) { }

  PostSalesEnggOfDealer(registerSalesEnginnerOfDealer:DealersSalesEngg)
   {
    return this.http.post(environment.apiBaseUrl+'/AddDealersSalesEngg',registerSalesEnginnerOfDealer);
   }

   DenySalesEnggOfDealer(_id:string)
  {
     return this.http.delete(environment.apiBaseUrl + `/${_id}`);
  }

  getAllSalesEngineerOfDealer()
  {
    return this.http.get(environment.apiBaseUrl+'/AddDealersSalesEngg');
  }
   
}
