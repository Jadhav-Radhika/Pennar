import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterDealerSalesEnggService } from '../../../../Business Services/register-dealer-sales-engg.service';

// import { DealerSalesEnggService } from '../../shared/dealer-sales-engg.service';

@Component({
  selector: 'app-dse-sign-up',
  templateUrl: './dse-sign-up.component.html',
  styleUrls: ['./dse-sign-up.component.css'],
  providers : [ RegisterDealerSalesEnggService ]
})
export class DSESignUpComponent implements OnInit {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSucessMessage: boolean;
  serverErrorMessages: string;

  constructor( private _registerDSE : RegisterDealerSalesEnggService) { }
 
  ngOnInit() {
  }

  onDSESubmit(form: NgForm) {
     this._registerDSE.PostDealerSalesEngineer(form.value).subscribe(
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

  resetForm(form: NgForm) {
    this._registerDSE.selectedDealerSalesEngg = {
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
    form.resetForm();
    this.serverErrorMessages = '';
  }

}
