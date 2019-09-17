// const express = require('express');

// var router = express.Router();

// var { DealerSalesEngg } = require('../models/DealerSalesEngg.model');

// //This will post the prouct price data to the url
// router.post('/', (req, res)=>
// {
//     //create an object of productDetail model class inside that we have field details of Product Details
//     var Dealer_Sales_Engg = new Dealer-SalesEngineer(
//         {
//             FirstName : req.body.FirstName,
//             LastName : req.body.LastName,
//             Address : req.body.Address,
//             Email : req.body.Email,
//             MobileNumber : req.body.MobileNumber,
//             PANnumber : req.body.PANnumber,
//             AdharNo : req.body.AdharNo,
//             Password : req.body.Password,
//         });
//         //insert data into mongoDB , after saving the record it will callback the function if there is any error it will sent to 'err' parameter , if condition is true then it will send parameters which is newly inserted 
//         Dealer_Sales_Engg.save((err, doc)=>{
//              if(!err){ res.send(doc);}
//              else{ console.log("Error in Customer Details Saving  : " + JSON.stringify(err,undefined,2));}
//         });
// });

// //base Url : http://localhost:3000/AddDealersSalesEngg
// router.get('/', (req,res)=>{
//     Dealer-SalesEngineer.find((err, docs) => {

//         if (!err) { res.send(docs); }

//         else { console.log('Error in Retriving Customer Details :' + JSON.stringify(err, undefined, 2)); }

//     });
// });

// module.exports = router;


const express = require('express');
const mongoose = require('mongoose');
var router = express.Router();

//Import ObjectId from mongoose to check is the entered id is available in mongodb or not
var ObjectId = require('mongoose').Types.ObjectId;

const SalesEngineerOfDealer = mongoose.model('SalesEngineerOfDealer');


router.get('/', (req, res) => {

    SalesEngineerOfDealer.find((err, docs) => {

        if (!err) { res.send(docs); }

        else { console.log('Error in Retriving Pennar Sales Engineer Details :' + JSON.stringify(err, undefined, 2)); }

    });

});

    router.post('/', (req, res, next) => {
        console.log("PostCall")
        var SalesEnggId=1;
        console.log(SalesEnggId);
        var NextId="1";
        console.log(NextId);
        SalesEngineerOfDealer.find().then(function(registerSalesEngg){
        
        if(!registerSalesEngg){return res.sendStatus(401);}
      var maxValue=0;
      registerSalesEngg.forEach(element => {
           
            var Id1= parseInt(element.SalesEnggId);
           
            if(maxValue< Id1)
            {
                maxValue = Id1;
            }          
      });
      SalesEnggId= maxValue + 1;
      console.log(" Incremented Id "+ SalesEnggId);
     
      if(SalesEnggId!=null)
      {
        NextId=SalesEnggId.toString();
      
      }

    var registerSalesEngg = new SalesEngineerOfDealer();
    registerSalesEngg.SalesEnggId = NextId;
    registerSalesEngg.CreatedDate = "";
    registerSalesEngg.ModifiedDate = "";
    registerSalesEngg.IsActive = "";
    registerSalesEngg.Status ="false";
    registerSalesEngg.FirstName = req.body.FirstName;
    registerSalesEngg.LastName = req.body.LastName;
    registerSalesEngg.Address = req.body.Address;
    registerSalesEngg.Email = req.body.Email;
    registerSalesEngg.MobileNumber = req.body.MobileNumber;
    registerSalesEngg.PANNumber = req.body.PANNumber;
    registerSalesEngg.AdharNumber = req.body.AdharNumber;
    registerSalesEngg.Password = req.body.Password;
    registerSalesEngg.save((err, doc) => {
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

// //deny Pennar Sales Engineer
// router.delete('/:id',(req,res)=>
// {
//     if(!ObjectId.isValid(req.params.id))
//    return res.status(400).send(`No Record with given id :  ${req.params.id}`);

//    SalesEngineerOfDealer.findByIdAndRemove(req.params.id,(err,doc)=>
//    {
//     if(!err){ res.send(doc);}
//     else{ console.log("Error in Deleting Pennar Sales Engineer : " + JSON.stringify(err,undefined,2));}
//    });
// });


module.exports = router;