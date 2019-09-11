// const express = require('express');

// var router = express.Router();

// //Import ObjectId from mongoose to check is the entered id is available in mongodb or not
// var ObjectId = require('mongoose').Types.ObjectId;

// var { RegisterDealerSalesEngg } = require('../models/DSEregister.model');


// //base Url : localhost:3000/RegisterDealerSalesEngineer
// router.get('/', (req,res)=>{
//     RegisterDealerSalesEngg.find((err, docs) => {

//         if (!err) { res.send(docs); }

//         else { console.log('Error in Retriving Dealer Sales Engineer Details :' + JSON.stringify(err, undefined, 2)); }

//     });
// });


// //get Dealer Sales Engineer  by an ID
// router.get('/:id', (req,res)=>
// {
//    if(!ObjectId.isValid(req.params.id))
//    return res.status(400).send(`No Record with given id :  ${req.params.id}`);

//    RegisterDealerSalesEngg.findById(req.params.id,(err, doc)=>{
//     if (!err) { res.send(doc); }
//     else { console.log('Error in Retriving DEaler Sales Engineer Details :' + JSON.stringify(err, undefined, 2)); }
//    });
// });

// // //This will post the prouct price data to the url
// router.post('/', (req, res)=>
// {
//     //create an object of productDetail model class inside that we have field details of Product Details
//     var registerDealerSalesEngg = new RegisterDealerSalesEngg(
//         {
//             FirstName : req.body.FirstName,
//             LastName : req.body.LastName,
//             Address : req.body.Address,
//             Email : req.body.Email,
//             MobileNumber : req.body.MobileNumber,
//             PANNumber : req.body.PANNumber,
//             AdharNumber : req.body.AdharNumber,
//             DealerCode : req.body.DealerCode,
//             Password : req.body.Password,
//             CreatedDate :new Date(),
//             ModifiedDate:new Date(),
//              isActive: true
//         });
//         //insert data into mongoDB , after saving the record it will callback the function if there is any error it will sent to 'err' parameter , if condition is true then it will send parameters which is newly inserted 
//         registerDealerSalesEngg.save((err, doc)=>{
//              if(!err){ res.send(doc);}
//              else{ console.log("Error in Dealer Sales Engineer detail Saving  : " + JSON.stringify(err,undefined,2));}
//         });
// });

// // //Update Product value with Put method
// router.put("/:id",(req, res)=>
// {
//   if(!ObjectId.isValid(req.params.id))
//   return res.status(400).send(`No record with given id : $(req.params.id)`);

//   var registerDealerSalesEngg = 
//     {
//             FirstName : req.body.FirstName,
//             LastName : req.body.LastName,
//             Address : req.body.Address,
//             Email : req.body.Email,
//             MobileNumber : req.body.MobileNumber,
//             PANNumber : req.body.PANNumber,
//             AdharNumber : req.body.AdharNumber,
//             DealerCode : req.body.DealerCode,
//             Password : req.body.Password,
//             ModifiedDate:new Date()
            
//     };
//     RegisterDealerSalesEngg.findByIdAndUpdate(req.params.id, {$set:registerDealerSalesEngg},{new:true},(err,doc)=>
//     {
//         if(!err){ res.send(doc);}
//         else{ console.log("Error in DEaler Sales Engg Updation : " + JSON.stringify(err,undefined,2));}
//     });
// });


// // //delete product
// router.delete('/:id',(req,res)=>
// {
//     if(!ObjectId.isValid(req.params.id))
//    return res.status(400).send(`No Record with given id :  ${req.params.id}`);

//    RegisterDealerSalesEngg.findByIdAndRemove(req.params.id,(err,doc)=>
//    {
//     if(!err){ res.send(doc);}
//     else{ console.log("Error in Dealer Sales Engg deletion : " + JSON.stringify(err,undefined,2));}
//    });
// });

// module.exports = router;


const express = require('express');
const mongoose = require('mongoose');
var router = express.Router();

const DealerSalesEngineer = mongoose.model('DealerSalesEngineer');

router.get('/', (req, res) => {

    DealerSalesEngineer.find((err, docs) => {

        if (!err) { res.send(docs); }

        else { console.log('Error in Retriving Dealer Details :' + JSON.stringify(err, undefined, 2)); }

    });

});

//post the dealer Info and save dealer to the database
 router.post('/', (req, res, next) => {
    // console.log("PostCall")
    //     var DealerId=1;
    //     console.log(DealerId);
    //     var NextId="1";
    //     console.log(NextId);
    //     DealerSalesEngineer.find().then(function(DealerDetails){
        
    //     if(!DealerDetails){return res.sendStatus(401);}
    //   var maxValue=0;
    //   DealerDetails.forEach(element => {
           
    //         var Id1= parseInt(element.DealerId);
           
    //         if(maxValue< Id1)
    //         {
    //             maxValue = Id1;
    //         }          
    //   });
    //   DealerId= maxValue + 1;
    //   console.log(" Incremented Id "+ DealerId);
     
    //   if(DealerId!=null)
    //   {
    //     NextId=DealerId.toString();
      
    //   }

    var registerDealer = new DealerSalesEngineer();
    registerDealer.DealerId = NextId;
    registerDealer.CreatedDate = "";
    registerDealer.ModifiedDate = "";
    registerDealer.IsActive = "";

    registerDealer.DealerName = req.body.DealerName;
    registerDealer.Address = req.body.Address;
    registerDealer.Email = req.body.Email;
    registerDealer.ContactNumber = req.body.ContactNumber;
    registerDealer.City = req.body.City;
    registerDealer.State = req.body.State;
    registerDealer.ContactKeyPerson = req.body.ContactKeyPerson;
    registerDealer.ContactKeyPersonName = req.body.ContactKeyPersonName;
    registerDealer.ContactKeyPersonMobileNumber = req.body.ContactKeyPersonMobileNumber;
    registerDealer.GSTnumber = req.body.GSTnumber;
    registerDealer.PANnumber = req.body.PANnumber;
    registerDealer.OtherDetails = req.body.OtherDetails;
    registerDealer.AreaOfOperation = req.body.AreaOfOperation;
    registerDealer.EmployeeStrength = req.body.EmployeeStrength;
    registerDealer.AnyOtherInfo1 = req.body.AnyOtherInfo1;
    registerDealer.AnyOtherInfo2 = req.body.AnyOtherInfo2;
    registerDealer.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            if (err.code == 11000)
                res.status(422).send(['Duplicate email adrress found.']);
            else
                return next(err);
        }

    });
    console.log('Inside Reg Function..');
 });
// });

// // deny Dealer method
// router.delete('/:id',(req,res)=>
// {
//     if(!ObjectId.isValid(req.params.id))
//    return res.status(400).send(`No Record with given id :  ${req.params.id}`);

//    DealerSalesEngineer.findByIdAndRemove(req.params.id,(err,doc)=>
//    {
//     if(!err){ res.send(doc);}
//     else{ console.log("Error in Deleting Dealer : " + JSON.stringify(err,undefined,2));}
//    });
// });

module.exports = router;