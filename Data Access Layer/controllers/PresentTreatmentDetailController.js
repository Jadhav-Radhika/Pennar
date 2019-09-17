
const express = require('express');
const mongoose = require('mongoose');
var router = express.Router();

//Import ObjectId from mongoose to check is the entered id is available in mongodb or not
var ObjectId = require('mongoose').Types.ObjectId;

// const RegisterPennarSalesEnginner = mongoose.model('RegisterPennarSalesEnginner');
const PresentTreatmentDetail = mongoose.model('PresentTreatmentDetail');


router.get('/', (req, res) => {

    PresentTreatmentDetail.find((err, docs) => {

        if (!err) { res.send(docs); }

        else { console.log('Error in Retriving Pennar Sales Engineer Details :' + JSON.stringify(err, undefined, 2)); }

    });

});

    router.post('/', (req, res, next) => {
        console.log("PostCall")
        var SupplierId=1;
        console.log(SupplierId);
        var NextId="1";
        console.log(NextId);
       PresentTreatmentDetail.find().then(function(TreatmentDetails){
        
        if(!TreatmentDetails){return res.sendStatus(401);}
      var maxValue=0;
      TreatmentDetails.forEach(element => {
           
            var Id1= parseInt(element.SupplierId);
           
            if(maxValue< Id1)
            {
                maxValue = Id1;
            }          
      });
      SupplierId= maxValue + 1;
      console.log(" Incremented Id "+ SupplierId);
     
      if(SupplierId!=null)
      {
        NextId=SupplierId.toString();
      
      }

    var presentTreatmentInfo = new PresentTreatmentDetail();
    presentTreatmentInfo.SupplierId = NextId;
    presentTreatmentInfo.CreatedDate = "";
    presentTreatmentInfo.ModifiedDate = "";
    presentTreatmentInfo.IsActive = "";
    presentTreatmentInfo.Status ="false";
    presentTreatmentInfo.SupplierName = req.body.SupplierName;
    presentTreatmentInfo.ProductName1 = req.body.ProductName1;
    presentTreatmentInfo.Dosage1 = req.body.Dosage1;
    presentTreatmentInfo.Price1 = req.body.Price1;
    presentTreatmentInfo.Function1 = req.body.Function1;
    presentTreatmentInfo.ProductName2 = req.body.ProductName2;
    presentTreatmentInfo.Dosage2 = req.body.Dosage2;
    presentTreatmentInfo.Price2 = req.body.Price2;

    presentTreatmentInfo.Function2 = req.body.Function2;
    presentTreatmentInfo.ProductName3 = req.body.ProductName3;
    presentTreatmentInfo.Dosage3 = req.body.Dosage3;
    presentTreatmentInfo.Price3 = req.body.Price3;
    presentTreatmentInfo.Function3 = req.body.Function3;
    presentTreatmentInfo.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            if (err.code == 11000)
                res.status(422).send(['Duplicate email adrress found.']);
            else
                return next(err);
        }

    });
    // console.log('Inside Reg Function..');
});
});

module.exports = router;