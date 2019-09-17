import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm,} from '@angular/forms';
import { DealerCustomerDetailService } from '../../../Business Services/dealer-customer-detail.service';
import { ToastrService } from 'ngx-toastr';
import { DealersCustomerDetail } from '../../../../../../Data Access Layer/models/DealersCustomerDetail.model';

//Service for add new sales engineer of dealer
import { RegisterSalesEnggOfDealerService } from '../../../Business Services/register-sales-engg-of-dealer.service';

@Component({
  selector: 'app-dealer',
  templateUrl: './dealer.component.html',
  styleUrls: ['./dealer.component.css'],
  providers:[DealerCustomerDetailService, RegisterSalesEnggOfDealerService]
})
export class DealerComponent implements OnInit {
  showSucessMessage: boolean;
  serverErrorMessages: string;
  constructor(private _DealerCustomerDetailService : DealerCustomerDetailService, private router:Router, private _toastr: ToastrService,
    private _registerSalesEnggOfDealerService : RegisterSalesEnggOfDealerService) { }

  ngOnInit() {
    this.resetForm();
    this.RefreshCustomerInfoList();
  }
  resetForm(form?:NgForm)
  {
    if(form)
    form.reset();
    this._DealerCustomerDetailService.selectedDealerCustomerDetail = {
      // _id :"",
      CompanyName: "",
      CityName : "",
      Address: "",
      Pincode: "",
      DealerCode: "",
      IndusrtyType: "",
      CustOtherInfo:"", 
      GSTno:"", 
      ContactPersonName: "", 
      Designation: "",
      FisrtEmail: "", 
      SecondEmail: "",
      OfficeNumber: "",
      MobileNumber: "",
      MoreContacts: "", 
      CustProdctPotential: "", 
      ChooseProductPraposal: "",
      EnquireyNature:""
    }
  }

  onCustomerInfoSubmit(form : NgForm)
  {
    
    this._DealerCustomerDetailService.PostDealersCustomerDetail(form.value).subscribe((_res)=>
  {
      this.resetForm(form); 
      this.RefreshCustomerInfoList()
      this.showAddToaster();  
    }); 
  }

  //Refresh All Customer Details Info
  RefreshCustomerInfoList()
  {
    this._DealerCustomerDetailService.GetAllCustomerListOfDealer().subscribe((res)=>{
    this._DealerCustomerDetailService.DealerCustDetails = res as DealersCustomerDetail[];
    });
  }
  
  //************************************************************************************************
 //__________________________________Add New Sales Engg Methods____________________________________
 //*************************************************************************************************

 onSalesEnggOfDealerSubmission(form: NgForm) {
  this._registerSalesEnggOfDealerService.PostSalesEnggOfDealer(form.value).subscribe(
   res => {
      this.showSucessMessage = true;
     setTimeout(() => this.showSucessMessage = false, 4000);
     this.resetForm(form);
   },
   err => {
     if (err.status === 422) {
        this.serverErrorMessages = err.error.join('<br/>');
      }
      else
        this.serverErrorMessages = 'Something went wrong.Please contact admin.';
   }
 );
}

resetSalesEnggOfDealerForm(form: NgForm) {
  this._registerSalesEnggOfDealerService.selectedDealersSalesEngg = {
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
  form.resetForm();
  this.serverErrorMessages = '';
}

 
  // code to toast notification
  showDeleteToaster(){
    this._toastr.warning("Record deleted successfully.")
  }

showAddToaster(){
  this._toastr.success("Record added successfully!")
}
 ShowEditToaster()
 {
   this._toastr.info("Record Updated Successfully");
 }


}
