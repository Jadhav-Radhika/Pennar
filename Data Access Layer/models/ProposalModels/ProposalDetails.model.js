constructor( )
{}
const mongoose = require('mongoose');

var ProposalDetails = mongoose.model('ProposalDetails', {

    //  Step:{type:string},
     id : { type : String },
     ProposalId:{type:String},
     StepNumber:{type:String},

     CreatedDate : { type : String },

     ModifiedDate : { type : String },
     
     IsActive : { type : String },

     TowerDetail : { 
      TowerNumbers : { type : String }, 
      TowerName : { type : String }
     },

     MakeUpWaterDetail :
      {

        // id : { type : String },
   
        // CreatedDate : { type : String },
   
        // ModifiedDate : { type : String },
   
        // IsActive : { type : String },
   
        SourceOfWater: { type: String },
        ddlSourceOfWater: { type: String },
   
        MakeUpWaterPh: { type: String },
        ddlMakeUpWaterPh: { type: String },
   
        MakeUpWaterTurbidity: { type: String },
        ddlMakeUpWaterTurbidity: { type: String },
   
        MakeUpWaterTDS: { type: String },
        ddlMakeUpWaterTDS: { type: String },
   
        MakeUpWaterConductivity: { type: String },
        ddlMakeUpWaterConductivity: { type: String },
   
        MakeUpWaterTotalHardness: { type: String },
        ddlMakeUpWaterTotalHardness: { type: String },
   
        MakeUpWaterCalHardness: { type: String },
        ddlMakeUpWaterCalHardness: { type: String },
   
        MakeUpWaterTotalAlkalinity: { type: String },
        ddlMakeUpWaterTotalAlkalinity: { type: String },
   
        MakeUpWaterChloride: { type: String },
        ddlMakeUpWaterChloride: { type: String },
   
        MakeUpWaterSulphates: { type: String },
        ddlMakeUpWaterSulphates: { type: String },
   
        MakeUpWaterSilica : { type: String },
        ddlMakeUpWaterSilica : { type: String },
   
        MakeUpWaterOtherInfo: { type: String },
        ddlMakeUpWaterOtherInfo: { type: String },
    
   },

     CirculatingWaterDetail:
        {
            id : { type : String },

            CreatedDate : { type : String },
       
            ModifiedDate : { type : String },
       
            IsActive : { type : String },
            
            CirculatingWaterPh: { type: String },
            ddlCirculatingWaterPh: { type: String },
       
            CirculatingWaterTurbidity: { type: String },
            ddlCirculatingWaterTurbidity: { type: String },
       
            CirculatingWaterTDS: { type: String },
            ddlCirculatingWaterTDS: { type: String },
       
            CirculatingWaterConductivity: { type: String },
            ddlCirculatingWaterConductivity: { type: String },
       
            CirculatingWaterTotalHardness: { type: String },
            ddlCirculatingWaterTotalHardness: { type: String },
       
            CirculatingWaterCalciumHardness: { type: String },
            ddlCirculatingWaterCalciumHardness: { type: String },
       
            CirculatingWaterTotalAlkalinity: { type: String },
            ddlCirculatingWaterTotalAlkalinity: { type: String },
       
            CirculatingWaterChloride: { type: String },
            ddlCirculatingWaterChloride: { type: String },
       
            CirculatingWaterSulphates: { type: String },
            ddlCirculatingWaterSulphates: { type: String },
       
            CirculatingWaterSilica: { type: String },
            ddlCirculatingWaterSilica: { type: String },
       
            CirculatingWaterPhosphate: { type: String },
            ddlCirculatingWaterPhosphate: { type: String },
       
            CirculatingWaterZinc: { type: String },
            ddlCirculatingWaterZinc: { type: String },

            CirculatingWaterFreeChlorine: { type : String },
            ddlCirculatingWaterFreeChlorine: { type : String},
       
            CirculatingWaterOtherInfo: { type: String },
            ddlCirculatingWaterOtherInfo: { type: String },
       
            CirculatingWater: { type: String },
            ddlCirculatingWater: { type: String }
        },

        CoolingTowerDetail :
         {

            id : { type : String },
       
            CreatedDate : { type : String },
       
            ModifiedDate : { type : String },
            
            IsActive : { type : String },
       
            WaterCirculationRate: { type: String },
            ddlWaterCirculationRate: { type: String },
       
            TempOutlet: { type: String },
            ddlTempOutlet: { type: String },

            TempInlet: { type: String },
            ddlTempInlet: { type: String },
       
            DeltaT: { type: String },
            ddlDeltaT: { type: String },
       
            Evaporation: { type: String },
            ddlEvaporation: { type: String },
       
            BlowDown: { type: String },
            ddlBlowDown: { type: String },
       
            COC: { type: String },
                  
            MakeUpWater: { type: String },
            ddlMakeUpWater: { type: String },
       
            OperatingHrsPerDay: { type: String },
            ddlOperatingHrsPerDay: { type: String },
       
            SideStreamFilterFlow: { type: String },
            ddlSideStreamFilterFlow: { type: String },
       
            AcidUsedForPhControl: { type: String },
            ddlAcidUsedForPhControl: { type: String },
       
            PercentagesAcidUsed: { type: String },
            ddlPercentagesAcidUsed: { type: String },
       
            CoolingTowerSumpVolume: { type: String },
            ddlCoolingTowerSumpVolume: { type: String },
       
            CoolingTowerCapacityTR: { type: String },
            ddlCoolingTowerCapacityTR: { type: String },
       
            CoolingTowerOtherInfo: { type: String },
            ddlCoolingTowerOtherInfo: { type: String },
        
       },
       
       CoolingTowerOperatingCondition :
        {

        id : { type : String },
   
        CreatedDate : { type : String }, 
   
        ModifiedDate : { type : String },
        
        IsActive : { type : String },
   
        IsTowerMaintenanceProper: { type: String },
        ddlIsTowerMaintenanceProper: { type: String },
   
        IsAlgaeSeenOnTower: { type: String },
        ddlIsAlgaeSeenOnTower: { type: String },
   
        IsSlimeInTower: { type: String },
        ddlIsSlimeInTower: { type: String },
   
        IsSumpWaterTurbidity: { type: String },
        ddlIsSumpWaterTurbidity: { type: String },
   
        IsThereAnyContamination: { type: String },
        ddlIsThereAnyContamination: { type: String },
   
        IsCopperCorrosionControlRequired: { type: String },
        ddlIsCopperCorrosionControlRequired: { type: String },
   
        txtOtherObservation: { type: String },
   
        txtComment: { type: String },
    
   },
    
   WaterRequirementDetail :
   {
    id : { type : String },

    CreatedDate : { type : String },

    ModifiedDate : { type : String },
    
    IsActive : { type : String },

    UsedMakeUpWater: { type: String },
    ddlUsedMakeUpWater: { type: String },

    MakeUpDoneProcess: { type: String },
    ddlMakeUpDoneProcess: { type: String },

    BlowDownQuantity: { type: String },
    ddlBlowDownQuantity: { type: String },

    BlowDownFrequency: { type: String },
    ddlBlowDownFrequency: { type: String },

},

PhotoFileUploadProvision :
  {
    id : { type : String },

    CreatedDate : { type : String },

    ModifiedDate : { type : String },
    
    IsActive : { type : String },

    CorrosionPhotoFiles: { type: String },

    FoulingPhotoFiles: { type: String },

    AlagePhotoFile : { type : String },

    OtherPhotoFile1 : { type : String },

    OtherPhotoFile2 : { type : String }

}
    //  TowerDetails:{

   
}, 'ProposalDetails');
module.exports = { ProposalDetails };