import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { environment} from '../../environments/environment';
import { PresentTreatmentDetail } from '../../../../Data Access Layer/models/PresentTreatmentDetail.model';

@Injectable({
  providedIn: 'root'
})
export class AddPresentTreatmentDetailService {
  selectedTreatmentInfo : PresentTreatmentDetail = {
    _id : '',
    SupplierName : '',
    ProductName1 : '',
    Dosage1 : '',
    Price1 : '',
    Function1 : '',
    ProductName2 : '',
    Dosage2 : '',
    Price2 : '',
    Function2 : '',
    ProductName3 : '',
    Dosage3 : '',
    Price3 : '',
    Function3 : '',
    ProductName4 : '',
    Dosage4 : '',
    Price4 : '',
    Function4 : ''
  };  
 

  constructor( private http : HttpClient) { }

  PostPresentTreatmentDetails(PresentTratmentInfo:PresentTreatmentDetail)
  {
   return this.http.post(environment.apiBaseUrl+'/PresentTreatmentDetail',PresentTratmentInfo);
   //return this.http.post(environment.apiBaseUrl+'/RegisterPennarSalesEngineer', registerPennarSalesEnginner)
  }

  getAllPresentTreatmentDetails()
  {
    return this.http.get(environment.apiBaseUrl + '/PresentTreatmentDetail')
  }
  
}
