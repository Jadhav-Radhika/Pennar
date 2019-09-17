import { Component, OnInit } from '@angular/core';
import { NgForm,} from '@angular/forms';
import { Router } from '@angular/router';

import { RegisterSalesEnggOfDealerService} from '../../../../Business Services/register-sales-engg-of-dealer.service';
import { DealersSalesEngg } from '../../../../../../../Data Access Layer/models/DealersSalesEngg.model';
import { from } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-approval-of-dealers-sales-engineer',
  templateUrl: './approval-of-dealers-sales-engineer.component.html',
  styleUrls: ['./approval-of-dealers-sales-engineer.component.css'],
  providers: [RegisterSalesEnggOfDealerService]
})
export class ApprovalOfDealersSalesEngineerComponent implements OnInit {

  constructor( private _RegisterSalesEnggOfDealerService : RegisterSalesEnggOfDealerService, private _toastr: ToastrService, private router:Router ) { }

  ngOnInit() {
    this.refreshApprovalListForSalesEnggOfDealer();
  }

  refreshApprovalListForSalesEnggOfDealer()
  {
    this._RegisterSalesEnggOfDealerService.getAllSalesEngineerOfDealer().subscribe((res)=>{
      // this._PSEApprovalService.PennarSalesEnggDetails = res as PSEApproval[];
      this._RegisterSalesEnggOfDealerService.SalesEnggOfDealer = res as DealersSalesEngg[];
    });
  }

  onDelete(_id:string, form:NgForm)
  {
    if(confirm('Are you sure to delete this record ?')==true)
    {
      this._RegisterSalesEnggOfDealerService.DenySalesEnggOfDealer(_id).subscribe((_res)=>
      {
        
        this.refreshApprovalListForSalesEnggOfDealer();
       
      });
    }
}
}
