const express = require('express');
const mongoose = require('mongoose');
var router = express.Router();

const RegisterDealer = mongoose.model('RegisterDealer');

router.get('/', (req, res) => {

    RegisterDealer.find((err, docs) => {

        if (!err) { res.send(docs); }

        else { console.log('Error in Retriving Dealer Details :' + JSON.stringify(err, undefined, 2)); }

    });

});

//post the dealer Info and save dealer to the database
router.post('/', (req, res, next) => {
    console.log("PostCall")
        var DealerId=1;
        console.log(DealerId);
        var NextId="1";
        console.log(NextId);
        RegisterDealer.find().then(function(DealerDetails){
        
        if(!DealerDetails){return res.sendStatus(401);}
      var maxValue=0;
      DealerDetails.forEach(element => {
           
            var Id1= parseInt(element.DealerId);
           
            if(maxValue< Id1)
            {
                maxValue = Id1;
            }          
      });
      DealerId= maxValue + 1;
      console.log(" Incremented Id "+ DealerId);
     
      if(DealerId!=null)
      {
        NextId=DealerId.toString();
      
      }

    var registerDealer = new RegisterDealer();
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
});

// deny Dealer method
router.delete('/:id',(req,res)=>
{
    if(!ObjectId.isValid(req.params.id))
   return res.status(400).send(`No Record with given id :  ${req.params.id}`);

   RegisterDealer.findByIdAndRemove(req.params.id,(err,doc)=>
   {
    if(!err){ res.send(doc);}
    else{ console.log("Error in Deleting Dealer : " + JSON.stringify(err,undefined,2));}
   });
});

module.exports = router;