import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment} from '../../environments/environment';
import { ProposalDetails } from '../../../../Data Access Layer/models/ProposalModels/ProposalDetails.model';
import { ProductDetails } from '../../../../Data Access Layer/models/ProductDetails.model';
import { BiodisperantProduct } from '../../../../Data Access Layer/models/BiodisperantProduct.model';
import { CopperCorrosionProduct } from '../../../../Data Access Layer/models/CopperCorrosionProduct.model';
import { ProductDetailsService} from '../Business Services/product-details.service'
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GenerateProposalService {
  selectedProposalDetails: ProposalDetails;
  currentProductDetails:ProductDetails;
  PD: ProposalDetails[]=[{}];
  RecommendationArray: ProposalDetails[];
  
  //Hard Coded value binding to grid
 
  // messages = [{function : 'A'}, {product :'B'}, {Doasage :120}];
  HEROES = [
    {Function: "Bidisperent", Product:"PT3475", Dosage :120, Method: "Continously", Basis:"BW", value:"0.8"},
    
  ];
   GetRecommendedProducts1() { 


     this.HEROES.push({Function: "Bidisperent_new", Product:"PT3475", Dosage :120, Method: "Continously", Basis:"BW", value:"0.8"})
     return this.HEROES;
   }
   GetRecommendedProducts12() { 


    this.HEROES.push({Function: "Bidisperent_new_FromRecommendation", Product:"PT3475", Dosage :120, Method: "Continously", Basis:"BW", value:"0.8"})
    return this.HEROES;
  }



  readonly baseURL = 'http://localhost:3000/ProposalDetails';
  constructor(private http:HttpClient,private ProductDetailsService:ProductDetailsService ) { }

  // Post method for Tower Details
  PostTowerDetail(TSdata : ProposalDetails)
  {
    // return this.http.post(this.baseURL, TSdata);
    return this.http.post(environment.apiBaseUrl+'/ProposalDetails',TSdata);
  }

  // Put method for Cooling Make Up Water Details
 PutMakeUpWaterDetail(TSdata : ProposalDetails)
  {
    TSdata.StepNumber2="2";
    TSdata.StepNumber="2";
    console.log("ServiCe Call :"+TSdata.StepNumber);
    return this.http.put(environment.apiBaseUrl+'/ProposalDetails' ,TSdata);
  }

  //Cooling Tower Details Put Method call
  PutCoolingToerDetail(TSdata : ProposalDetails)
  {
    TSdata.StepNumber1="1";
    TSdata.StepNumber="1";
    console.log("ServiCe Call :"+TSdata.StepNumber);
    return this.http.put(environment.apiBaseUrl+'/ProposalDetails' ,TSdata);
  }

  // Put method for Cooling Tower Operating Condition Detail
  PutCoolingTowerOperatingConditionDetail(TSdata : ProposalDetails)
  {
    TSdata.StepNumber4="4";
    // TSdata.StepNumber="1";
    console.log("ServiCe Call :"+TSdata.StepNumber);
    return this.http.put(environment.apiBaseUrl+'/ProposalDetails' ,TSdata);
  }

  // Put method for Circulating Water Details 
  PutCirculatingWaterDetails(TSdata : ProposalDetails)
  {
    // TSdata.StepNumberCirculatingWater = "1";
    TSdata.StepNumber3="3";
    TSdata.StepNumber="3";
    return this.http.put(environment.apiBaseUrl+'/ProposalDetails' ,TSdata);
  }

  // Put method for Water Requirement Detail 
  PutWaterRequirementDetail(TSdata : ProposalDetails)
  {
    // TSdata.StepNumberCirculatingWater = "1";
    TSdata.StepNumber5="5";
    return this.http.put(environment.apiBaseUrl+'/ProposalDetails' ,TSdata);
  }
  //https://dzone.com/articles/how-to-parse-json-data-from-a-rest-api-using-simpl

 GetProposalDetail(TSdata : ProposalDetails)
  {
    // return this.http.post(this.baseURL, TSdata);
    alert("proposalDetails Get Proposaldetails  Called");
    var proposalDetails1 =  this.http.get(environment.apiBaseUrl+'/ProposalDetails',TSdata);
    var maxValue=0;
    var proposalItem=null;
    var vvv1 =   ((JSON.parse(JSON.stringify(proposalDetails1))));
vvv1.results.array.forEach(element => {
  alert("vv1 All RetrievedCount "+String(element));
});

     this.PD = ((JSON.parse(JSON.stringify(proposalDetails1))));
    alert("itemListResponse All RetrievedCount "+String(this.PD.length));

    alert("All Retrieved "+String(JSON.stringify(proposalDetails1)));
    this.PD.forEach(element => {
      alert("All Retrieved "+String(JSON.stringify(element)));
    });
    
    this.PD.forEach(function(value)
    {
      alert("retrieved forEach "+JSON.stringify(value));
      var v1= JSON.stringify(value);
      
      alert("retrieved forEach v1 "+v1);
      let currentItem:ProposalDetails=JSON.parse(value);
     
      var selectedProposalDetails=JSON.parse(v1);
    
      alert("Get Proposal Called in collection foreach-currentItem"+JSON.stringify(currentItem));
      alert("Get Proposal Called in collection foreach-mystring"+value.ProposalId);
    
console.log(value.myString);
      var proposalId1= parseInt(value.ProposalId);
      if(currentItem.ProposalId!=null)
      {
       if(maxValue< proposalId1)
       {
           proposalItem= currentItem;
           alert("Get Proposal Called in collection foreach"+ proposalId1);
       }    
    }});
    alert("Get Proposal Called in IterationCompleted");
    return proposalItem;
  }
  GetRecommendedProducts(TSdata : ProposalDetails)
  {
    alert("Generae Proposal Service GetRecommendedProducts  called");
    var proposalDetails= this.GetProposalDetail(TSdata);
    alert("Generae Proposal Service proposalDetails Retrieved");
    var currentProposal  = proposalDetails as ProposalDetails;
    alert("Proposal Id"+ currentProposal.ProposalId);
    alert("Proposal : "+proposalDetails);
 //  var corrosionProducts= this.GetCorrosionScaleSelection(proposalDetails)
    return this.GetRecommendedProducts12();
    
    //Create array
    //Add items
    //return array



    //var biosideproducts = this.GetBiocideSelection(TSdata);
//     var corrosionProducts= this.GetCorrosionScaleSelection(TSdata);
   //var copperProducts= this.GetCopperCorrosionSelection(TSdata);

//     var biodesperantProducts= this.GetBioDesperateSelection(TSdata);
//     var ProductModel=Array;
//     copperProducts.forEach(element => {
//       var vProduct = element.value;
//     var model = new ProductRecommendationoModel{
//       Name=vProduct.ProductType

//     };
//     RecommendationArray.Add(model);
    
//     });
// return RecommendationArray;

   
//     // TSdata.Step="1";
//     TSdata.StepNumber="1";
//     // return this.http.put(this.baseURL, TSdata);
//     return this.http.put(environment.apiBaseUrl+'/ProposalDetails' ,TSdata);
  }
  GetCopperCorrosionSelection(TSdata:ProposalDetails)  
  {
    var Evaporation= Number(TSdata.DeltaT) *(TSdata.WaterCirculationRate) / Number(675)
    var Makeup = Number(BD + Evaporation)
    var COCTaken=  Number(TSdata.CirculatingWaterTotalHardness)/  Number(TSdata.MakeUpWaterTotalHardness);
    var BD = Number(TSdata.Evaporation)/(COCTaken-1);
    var HoldUp = Number(TSdata.CoolingTowerSumpVolume);
    var Products = new Map();
    var isRequire = TSdata.CoolingTowerOperatingCondition.IsCopperCorrosionControlRequired;
    if(isRequire=="Yes")
    {
      var productCollection=this.ProductDetailsService.getAllCopperCorrosionProducts();
      productCollection.forEach(element => {
        var item = (element as CopperCorrosionProduct);
        var DosageBDUnit = (Number(item.Dosage)*BD)/1000;
        var qtyperkgpermonth= DosageBDUnit*24*30;
            var obj: {[k: string]: any} = {Frequency:"NA",Dosage:item.Dosage,ProductType:"CopperCorrosion",
            BlowDown:BD,DosageBDUnit:DosageBDUnit,QuanrityPerKgMonth: qtyperkgpermonth};
            Products.set(item.ProductName,obj);
            console.log(item.ProductName);
          
      });
    }
return Products;
    
  }
  GetBioDesperateSelection(TSdata:ProposalDetails)  
  {
    var COCTaken=  Number(TSdata.CirculatingWaterDetail.CirculatingWaterTotalHardness)/  Number(TSdata.MakeUpWaterDetail.MakeUpWaterTotalHardness);
    var Evaporation = Number(TSdata.CoolingTowerDetail.DeltaT)*Number(TSdata.CoolingTowerDetail.WaterCirculationRate)/(675);
    var BD = Number(Evaporation)/(COCTaken-1);
    var Products = new Map();
    var turbidity = TSdata.CirculatingWaterDetail.CirculatingWaterTurbidity;
    // var TotalHardness = TSdata.CirculatingWaterDetail.CirculatingWaterTotalHardness;
    var waterTurbidity = Number(turbidity);

    var IsTowerMaintenanceProper = (TSdata.CoolingTowerOperatingCondition.IsTowerMaintenanceProper=="" || TSdata.CoolingTowerOperatingCondition.IsTowerMaintenanceProper=="No")?1 :0;
    var IsAlgaeSeenOnTower=(TSdata.CoolingTowerOperatingCondition.IsAlgaeSeenOnTower==""||TSdata.CoolingTowerOperatingCondition.IsAlgaeSeenOnTower=="Yes")?1:0 ;
    var IsSlimeInTower=(TSdata.CoolingTowerOperatingCondition.IsSlimeInTower==""|| TSdata.CoolingTowerOperatingCondition.IsSlimeInTower=="Yes")?1:0;
    var IsSumpWaterTurbidity=(TSdata.CoolingTowerOperatingCondition.IsSumpWaterTurbidity=="" || TSdata.CoolingTowerOperatingCondition.IsSumpWaterTurbidity=="Yes")?1:0;
    var IsThereAnyContamination=(TSdata.CoolingTowerOperatingCondition.IsThereAnyContamination=="" ||TSdata.CoolingTowerOperatingCondition.IsThereAnyContamination=="Yes")?1:0;
    var maintScore = IsTowerMaintenanceProper+IsAlgaeSeenOnTower+IsSlimeInTower+IsSumpWaterTurbidity+IsThereAnyContamination;
  

    var productCollection=this.ProductDetailsService.getAllBioDesperantProducts();

  productCollection.forEach(element => {

    var item = (element as BiodisperantProduct);

var currentTurbidity = Number(item.Turbidity);
var currentMaintScore = Number(item.MaintScore);
if(currentTurbidity <30 && currentMaintScore<3 && waterTurbidity <30 && maintScore<3 )
{
  var obj: {[k: string]: any} = {Frequency:"NA",Dosage:item.Dosage};
  Products.set(item.ProductName,obj);
}
else if((currentTurbidity >=30 || currentMaintScore>=3 ) && (waterTurbidity >=30 && maintScore>=3 ))
{
  var obj: {[k: string]: any} = {Frequency:"NA",Dosage:item.Dosage, ProductType:"BioDesperateSelection"};
  Products.set(item.ProductName,obj);
} 

  });
  return Products;
}

  GetCorrosionScaleSelection(TSdata:ProposalDetails)  
  {
    var RecommendationArray = [
      {Function:"XXXXX", Product:"PT3475", Dosage :Number(TSdata.CirculatingWaterDetail.CirculatingWaterTotalHardness),
       Method: "Continously11", Basis:"BW", value:"0.8"}];
      var sFunction="";
      var sProduct="";
      var sDosage=0;
      var sMethod="";
      var sBasis="";
      var sValue="";
      var test= false;
    
     
      // RecommendationArray.push({Function:TSdata.CirculatingWaterTotalHardness,Product:sProduct,Dosage:sDosage,Basis:sBasis,Method:sMethod,value:sValue});
 if(test)
 {
    var COCTaken=  Number(TSdata.CirculatingWaterDetail.CirculatingWaterTotalHardness)/  Number(TSdata.MakeUpWaterTotalHardness);
    var BD = Number(TSdata.Evaporation)/(COCTaken-1);
    var HF = 0.693 * (Number(TSdata.CoolingTowerSumpVolume));
    var halfLife = HF/BD;
    var Products = new Map();
    var WaterPh = TSdata.CirculatingWaterDetail.CirculatingWaterPh;
    var TotalHardness = TSdata.CirculatingWaterDetail.CirculatingWaterTotalHardness;
    var Ph = Number(WaterPh);
    var Th = Number(TotalHardness);
    
sFunction="CorrosionScaleSelection";
sBasis="BlowDown";
sMethod="Contineous";//Suggested by Nipun

    var productCollection=this.ProductDetailsService.getAllProducts();
   
   
  productCollection.forEach(element => {
    
    var item= (element as ProductDetails);
    var minph = item.MinpHRange;
    var maxph = item.MaxpHRange;
    var minth = item.MinTHRange;
    var maxth = item.MaxTHRange;
    if((minth>=0 && maxth<=30) && (Th>=0 && Th<=30))  
    {
    if((minph>=7 && maxph<=7.4) && (Ph>=7 && Ph<=7.4))
    {
      //frequency will be NA as not defined in EXCEL
    //  var obj: {[k: string]: any} = {Frequency:"NA",Dosage:item.Dosage,ProductType:"CorrosionScaleSelection" };
      sProduct=item.ProductName;
      sDosage=item.Dosage;
      sValue=String((item.Dosage * BD)/1000);
    
    }
    if((minph>=7.4 && maxph<=7.8) && (Ph>=7.4 && Ph<=7.8))
    {
      sProduct=item.ProductName;
      sDosage=item.Dosage;
      sValue=String((item.Dosage * BD)/1000);
     
    }
    if(minph>=7.8 && maxph<=8.2 && (Ph>=7.8 && Ph<=8.2))
    {
      sProduct=item.ProductName;
      sDosage=item.Dosage;
      sValue=String((item.Dosage * BD)/1000);
    
    }
    if((minph>=8.2 && maxph<=8.5) && (Ph>=8.2 && Ph<=8.5))
    {
      sProduct=item.ProductName;
      sDosage=item.Dosage;
      sValue=String((item.Dosage * BD)/1000);
     
    }
  }
  else
  if((minth>=30 && maxth<=100) && (Th>=30 && Th<=100))  
  {
  if((minph>=7 && maxph<=7.4) && (Ph>=7 && Ph<=7.4))
  {
    sProduct=item.ProductName;
    sDosage=item.Dosage;
    sValue=String((item.Dosage * BD)/1000);
    sMethod="Contineous";//Suggested by Nipun
  }
  if((minph>=7.4 && maxph<=7.8) && (Ph>=7.4 && Ph<=7.8))
  {
    sProduct=item.ProductName;
    sDosage=item.Dosage;
    sValue=String((item.Dosage * BD)/1000);
    sMethod="Continous";//Suggested by Nipun
  }
  if((minph>=7.8 && maxph<=8.2) && (Ph>=7.8 && Ph<=8.2))
  {
    sProduct=item.ProductName;
    sDosage=item.Dosage;
    sValue=String((item.Dosage * BD)/1000);
    sMethod="Continous";//Suggested by Nipun
  }
  if((minph>=8.2 && maxph<=8.5) && (Ph>=8.2 && Ph<=8.5))
  {
    sProduct=item.ProductName;
    sDosage=item.Dosage;
    sValue=String((item.Dosage * BD)/1000);
    sMethod="Contineous";//Suggested by Nipun
  }
}
else
if((minth>=100 && maxth<=300)  && (Th>=100 && Th<=300))
{
if((minph>=7 && maxph<=7.4) && (Ph>=7 && Ph<=7.4))
{
  //frequency will be NA as not defined in EXCEL
  sProduct=item.ProductName;
  sDosage=item.Dosage;
  sValue=String((item.Dosage * BD)/1000);
  sMethod="Contineous";//Suggested by Nipun
}
if((minph>=7.4 && maxph<=7.8) && (Ph>=7.4 && Ph<=7.8))
{
  //frequency will be NA as not defined in EXCEL
  sProduct=item.ProductName;
  sDosage=item.Dosage;
  sValue=String((item.Dosage * BD)/1000);
  sMethod="Contineous";//Suggested by Nipun
}
if((minph>=7.8 && maxph<=8.2) && (Ph>=7.8 && Ph<=8.2))
{
  sProduct=item.ProductName;
  sDosage=item.Dosage;
  sValue=String((item.Dosage * BD)/1000);
  //frequency will be NA as not defined in EXCEL
 
}
if((minph>=8.2 && maxph<=8.5) && (Ph>=8.2 && Ph<=8.5))
{
  sProduct=item.ProductName;
  sDosage=item.Dosage;
  sValue=String((item.Dosage * BD)/1000);
  sMethod="Contineous";//Suggested by Nipun
 
}
}
else
if((minth>=300 && maxth<=500)  && (Th>=300 && Th<=500)) 
{
if((minph>=7 && maxph<=7.4) && (Ph>=7 && Ph<=7.4))
{
  sProduct=item.ProductName;
  sDosage=item.Dosage;
  sValue=String((item.Dosage * BD)/1000);
  sMethod="Contineous";//Suggested by Nipun
  //frequency will be NA as not defined in EXCEL
 
}
if((minph>=7.4 && maxph<=7.8) && (Ph>=7.4 && Ph<=7.8))
{
  sProduct=item.ProductName;
  sDosage=item.Dosage;
  sValue=String((item.Dosage * BD)/1000);
  sMethod="Contineous";//Suggested by Nipun
 
}
if((minph>=7.8 && maxph<=8.2) && (Ph>=7.8 && Ph<=8.2))
{
  sProduct=item.ProductName;
  sDosage=item.Dosage;
  sValue=String((item.Dosage * BD)/1000);
  sMethod="Contineous";//Suggested by Nipun
  
}
if((minph>=8.2 && maxph<=8.5) && (Ph>=8.2 && Ph<=8.5))
{
  sProduct=item.ProductName;
  sDosage=item.Dosage;
  sValue=String((item.Dosage * BD)/1000);
  sMethod="Contineous";//Suggested by Nipun
}

}
 
RecommendationArray.push({Function:sFunction,Product:sProduct,Dosage:sDosage,Basis:sBasis,Method:sMethod,value:sValue});
});

}

  return RecommendationArray;
}
//   GetBiocideSelection(TSdata:ProposalDetails)
//   {
    
//     //Bioside Selection   
//     var COCTaken=  Number(TSdata.CirculatingWaterTotalHardness)/  Number(TSdata.MakeUpWaterTotalHardness);
//     var BD = Number(TSdata.Evaporation)/(COCTaken-1);
//     var HoldUp = Number(TSdata.CoolingTowerSumpVolume);
//     var HF = 0.693 * (Number(TSdata.CoolingTowerSumpVolume));
//     var halfLife = HF/BD;
//     var Products = new Map();
//     var IsTowerMaintenanceProper = (TSdata.IsTowerMaintenanceProper=="" || TSdata.IsTowerMaintenanceProper=="No")?1 :0;
//     var IsAlgaeSeenOnTower=(TSdata.IsAlgaeSeenOnTower==""||TSdata.IsAlgaeSeenOnTower=="Yes")?1:0 ;
//     var IsSlimeInTower=(TSdata.IsSlimeInTower==""|| TSdata.IsSlimeInTower=="Yes")?1:0;
//     var IsSumpWaterTurbidity=(TSdata.IsSumpWaterTurbidity=="" || TSdata.IsSumpWaterTurbidity=="Yes")?1:0;
//     var IsThereAnyContamination=(TSdata.IsThereAnyContamination=="" ||TSdata.IsThereAnyContamination=="Yes")?1:0;
//     var maintScore = IsTowerMaintenanceProper+IsAlgaeSeenOnTower+IsSlimeInTower+IsSumpWaterTurbidity+IsThereAnyContamination;
//     var productCollection=this.ProductDetailsService.getAllBiocideProducts();

//     productCollection.forEach(element => {
  
//       var item = (element as BiocideProduct);
//     if(maintScore>2)
//     {
//     if(halfLife>8)
//     {
//       var dosage=0;
//      if( TSdata.SourceOfWater=="RO" || TSdata.SourceOfWater=="Softner")
//      {        
//          dosage= 125;       
//      }
//      else  if( TSdata.SourceOfWater!="RO" || TSdata.SourceOfWater!="Softner")
//      {     
//        dosage= 100;
//      }
//      var frequency= "fortnighty";//TSdata.BlowDownFrequency// Has been taken from WaterRequirement- fortnighty;
//      var obj1: {[k: string]: any} = {Frequency:frequency,Dosage:dosage, ProductType:"BiocideSelection"};
//      var obj2: {[k: string]: any} = {Frequency:frequency,Dosage:dosage, ProductType:"BiocideSelection"};
//      Products.set(item.ProductName,obj1);
//      Products.set(item.ProductName,obj2);
//     }
   

//     if(halfLife<8)
//     {
//       var dosage=0;
//      if( TSdata.SourceOfWater=="RO" || TSdata.SourceOfWater=="Softner")
//      {        
//          dosage= 125;       
//      }
//      else  if( TSdata.SourceOfWater!="RO" || TSdata.SourceOfWater!="Softner")
//      {     
      
//        dosage= 100;
//      }
//      var frequency= "weekly";
//      var obj1: {[k: string]: any} = {Frequency:frequency,Dosage:dosage, ProductType:"BiocideSelection"};
//      var obj2: {[k: string]: any} = {Frequency:frequency,Dosage:dosage, ProductType:"BiocideSelection"};
//      Products.set(item.ProductName,obj1);
//      Products.set(item.ProductName,obj2);
//     }
//   }

//   else if(maintScore<=2)
//   {
//     if(halfLife>8)
//     {
//       var dosage=0;
//      if( TSdata.SourceOfWater=="RO" || TSdata.SourceOfWater=="Softner")
//      {        
//          dosage= 125;       
//      }
//      else  if( TSdata.SourceOfWater!="RO" || TSdata.SourceOfWater!="Softner")
//      {     
//        dosage= 100;
//      }
//     //  var frequency= TSdata.BlowDownFrequency// Has been taken from WaterRequirement- fortnighty;
//      var frequency= "fortnightly"
//      var obj3: {[k: string]: any} = {Frequency:"Daily",Dosage:"30"};
//      Products.set(item.ProductName,obj3);
//      var obj1: {[k: string]: any} = {Frequency:frequency,Dosage:dosage, ProductType:"BiocideSelection"};
//      var obj2: {[k: string]: any} = {Frequency:frequency,Dosage:dosage, ProductType:"BiocideSelection"};
//      Products.set(item.ProductName,obj1);
//      Products.set(item.ProductName,obj2);
//      Products.set(item.ProductName,obj3);
//     }
   

//     if(halfLife<8)
//     {
//         var dosage=0;
//       if( TSdata.SourceOfWater=="RO" || TSdata.SourceOfWater=="Softner")
//       {        
//           dosage= 125;       
//       }
//       else  if( TSdata.SourceOfWater!="RO" || TSdata.SourceOfWater!="Softner")
//       {     
//         dosage= 100;
//       }
//       // var frequency= TSdata.BlowDownFrequency// Has been taken from WaterRequirement- fortnighty;
//       var frequency= "weekly"
//       var obj1: {[k: string]: any} = {Frequency:frequency,Dosage:dosage, ProductType:"BiocideSelection"};
//       var obj2: {[k: string]: any} = {Frequency:frequency,Dosage:dosage,ProductType:"BiocideSelection"};
//       Products.set(item.ProductName,obj1);
//       Products.set(item.ProductName,obj2);
//       var obj3: {[k: string]: any} = {Frequency:"daily",Dosage:"30"};
//       Products.set(item.ProductName,obj3);
//     }
//   }
// });
//   return Products;
// }
  
}
