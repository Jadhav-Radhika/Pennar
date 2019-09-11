import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


import { RegisterPennarSalesEnginnerService } from '../../../../Business Services/register-pennar-sales-enginner.service';

@Component({
  selector: 'app-pse-sign-up',
  templateUrl: './pse-sign-up.component.html',
  styleUrls: ['./pse-sign-up.component.css'],
  providers:[RegisterPennarSalesEnginnerService]
})
export class PseSignUpComponent implements OnInit {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSucessMessage: boolean;
  serverErrorMessages: string;

  constructor( private _RegisterPennarSalesEnginnerService:RegisterPennarSalesEnginnerService) { }

  ngOnInit() {
  }
  onPSESubmit(form: NgForm) {
    this._RegisterPennarSalesEnginnerService.PostPennarSalesEngg(form.value).subscribe(
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

 //Deny Pennar Sales Engineer
 onDelete(_id:string, form:NgForm)
 {
   if(confirm('Are you sure to delete this record ?')==true)
   {
     this._RegisterPennarSalesEnginnerService.DenyPennarSalesEnggAprroval(_id).subscribe((_res)=>
     {
       this.resetForm(form);
      //  this.showDeleteToaster();
      //  this.refreshProductPriceList();
      
     });
   }
 }


 resetForm(form: NgForm) {
  this._RegisterPennarSalesEnginnerService.selectedRegisterPennarSalesEnginner = {
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


}
