// built-in
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Toaster notification
import { ToastrModule } from 'ngx-toastr';
//angular stepper material
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatStepperModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule,
  MatTableModule
} from '@angular/material';


import { NgModule } from '@angular/core';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { FileSelectDirective } from 'ng2-file-upload';
import { RouterModule } from '@angular/router';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
// TEXT EDITOR 
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
// components
import { AppComponent } from './app.component';
//routes
import { appRoutes } from './routes';

import { AdminService } from './Business Services/Admin.service';
//other
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminComponent } from './components/admin/admin.component';
import { ProductCURDComponent } from './components/admin/product-curd/product-curd.component';
import { PriceDetailsComponent } from './components/admin/price-details/price-details.component';
import { PraposalFormatComponent } from './components/admin/praposal-format/praposal-format.component';
import { DealerSalesEnggComponent } from './components/DealerSalesEngg Component/dealer-sales-engg/dealer-sales-engg.component';
import { DSESignUpComponent } from './components/DealerSalesEngg Component/dealer-sales-engg/dse-sign-up/dse-sign-up.component';
import { DseSignInComponent } from './components/DealerSalesEngg Component/dealer-sales-engg/dse-sign-in/dse-sign-in.component';
import { HeaderComponent } from './components/admin/Common Components/header/header.component';
import { FooterComponent } from './components/admin/Common Components/footer/footer.component';

import { SalesManagerHOComponent} from './components/SalesManagerHo Component/sales-manager-ho/sales-manager-ho.component';
import { SMFooterComponent } from './components/SalesManagerHo Component/sales-manager-ho/Common Component/smfooter/smfooter.component';
import { SMHeaderComponent } from './components/SalesManagerHo Component/sales-manager-ho/Common Component/smheader/smheader.component';
import { ApprovalForNewDealerComponent } from './components/SalesManagerHo Component/sales-manager-ho/approval-for-new-dealer/approval-for-new-dealer.component';
import { ApprovalForPennarSalesEngineerComponent } from './components/SalesManagerHo Component/sales-manager-ho/approval-for-pennar-sales-engineer/approval-for-pennar-sales-engineer.component';
import { ListOfPennarSalesEngineerComponent } from './components/SalesManagerHo Component/sales-manager-ho/list-of-pennar-sales-engineer/list-of-pennar-sales-engineer.component';
import { ListOfDealersComponent } from './components/SalesManagerHo Component/sales-manager-ho/list-of-dealers/list-of-dealers.component';
import { DealerComponent } from './components/Dealer Component/dealer/dealer.component';
import { DmheaderComponent } from './components/Dealer Component/dealer/Common Component/dmheader/dmheader.component';
import { DmfooterComponent } from './components/Dealer Component/dealer/Common Component/dmfooter/dmfooter.component';
import { ListofsalesengineerComponent } from './components/Dealer Component/dealer/listofsalesengineer/listofsalesengineer.component';


import { PennarSalesEnggDashboardComponent } from './components/PennarSalesEngg Component/pennar-sales-engg-dashboard/pennar-sales-engg-dashboard.component';
import { RegisterPennarSalesEnginnerComponent } from './components/PennarSalesEngg Component/register-pennar-sales-enginner/register-pennar-sales-enginner.component';
import { PseSignInComponent } from './components/PennarSalesEngg Component/register-pennar-sales-enginner/pse-sign-in/pse-sign-in.component';
import { PseSignUpComponent } from './components/PennarSalesEngg Component/register-pennar-sales-enginner/pse-sign-up/pse-sign-up.component';
import { RegisterDealerComponent } from './components/Dealer Component/register-dealer/register-dealer.component';
import { DealerSignInComponent } from './components/Dealer Component/register-dealer/dealer-sign-in/dealer-sign-in.component';
import { DealerSignUpComponent } from './components/Dealer Component/register-dealer/dealer-sign-up/dealer-sign-up.component';
import { AdminLoginComponent } from './components/admin/admin-login/admin-login.component';
import { AdminSignInComponent } from './components/admin/admin-login/admin-sign-in/admin-sign-in.component';
import { AdminSignUpComponent } from './components/admin/admin-login/admin-sign-up/admin-sign-up.component';
import { CustomerDataEntryScreenComponent } from './components/PennarSalesEngg Component/pennar-sales-engg-dashboard/customer-data-entry-screen/customer-data-entry-screen.component';
import { CorrosionAndScaleInhibitorComponent } from './components/admin/product-curd/corrosion-and-scale-inhibitor/corrosion-and-scale-inhibitor.component';
import { BiodisperasntSelectionComponent } from './components/admin/product-curd/biodisperasnt-selection/biodisperasnt-selection.component';
import { BiocideSelectionComponent } from './components/admin/product-curd/biocide-selection/biocide-selection.component';
import { CopperCorrosionControlComponent } from './components/admin/product-curd/copper-corrosion-control/copper-corrosion-control.component';
import { SalesManagerHoLoginComponent } from './components/SalesManagerHo Component/sales-manager-ho-login/sales-manager-ho-login.component';
import { SalesManagerHoSignInComponent } from './components/SalesManagerHo Component/sales-manager-ho-login/sales-manager-ho-sign-in/sales-manager-ho-sign-in.component';
import { SalesManagerHoSignUpComponent } from './components/SalesManagerHo Component/sales-manager-ho-login/sales-manager-ho-sign-up/sales-manager-ho-sign-up.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdminComponent,
    ProductCURDComponent,
    PriceDetailsComponent,
    PraposalFormatComponent,
    FileSelectDirective,
    DealerSalesEnggComponent,
    DSESignUpComponent,
    DseSignInComponent,
    HeaderComponent,
    FooterComponent,

    SalesManagerHOComponent,
    SMFooterComponent,
    SMHeaderComponent,
    ApprovalForNewDealerComponent,
    ApprovalForPennarSalesEngineerComponent,
    ListOfPennarSalesEngineerComponent,
    ListOfDealersComponent,
    DealerComponent,
    DmheaderComponent,
    DmfooterComponent,
    ListofsalesengineerComponent,
    
   
    PennarSalesEnggDashboardComponent,
    RegisterPennarSalesEnginnerComponent,
    PseSignInComponent,
    PseSignUpComponent,
    RegisterDealerComponent,
    DealerSignInComponent,
    DealerSignUpComponent,
    AdminLoginComponent,
    AdminSignInComponent,
    AdminSignUpComponent,
    CustomerDataEntryScreenComponent,
    CorrosionAndScaleInhibitorComponent,
    BiodisperasntSelectionComponent,
    BiocideSelectionComponent,
    CopperCorrosionControlComponent,
    SalesManagerHoLoginComponent,
    SalesManagerHoSignInComponent,
    SalesManagerHoSignUpComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, {onSameUrlNavigation: 'reload'}),
    ToastrModule.forRoot({
      positionClass :'toast-top-center'
     
    }),
    HttpClientModule,
    RichTextEditorAllModule,
    MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatStepperModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule,
  MatTableModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },AuthGuard,AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
