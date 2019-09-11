
const express = require('express');
const mongoose = require('mongoose');
var router = express.Router();

//Import ObjectId from mongoose to check is the entered id is available in mongodb or not
var ObjectId = require('mongoose').Types.ObjectId;

const RegisterPennarSalesEnginner = mongoose.model('RegisterPennarSalesEnginner');


    router.get('/', (req, res) => {

        RegisterPennarSalesEnginner.find((err, docs) => {
    
            if (!err) { res.send(docs); }
    
            else { console.log('Error in Retriving Pennar Sales Engineer Details :' + JSON.stringify(err, undefined, 2)); }
    
        });
    
    });
    router.post('/', (req, res, next) => {
        console.log("PostCall")
        var PennarSalesEnggId=1;
        console.log(PennarSalesEnggId);
        var NextId="1";
        console.log(NextId);
       RegisterPennarSalesEnginner.find().then(function(pseDetails){
        
        if(!pseDetails){return res.sendStatus(401);}
      var maxValue=0;
      pseDetails.forEach(element => {
           
            var Id1= parseInt(element.PennarSalesEnggId);
           
            if(maxValue< Id1)
            {
                maxValue = Id1;
            }          
      });
      PennarSalesEnggId= maxValue + 1;
      console.log(" Incremented Id "+ PennarSalesEnggId);
     
      if(PennarSalesEnggId!=null)
      {
        NextId=PennarSalesEnggId.toString();
      
      }

    var registerPennarSalesEngineer = new RegisterPennarSalesEnginner();
    registerPennarSalesEngineer.PennarSalesEnggId = NextId;
    registerPennarSalesEngineer.CreatedDate = "";
    registerPennarSalesEngineer.ModifiedDate = "";
    registerPennarSalesEngineer.IsActive = "";
    registerPennarSalesEngineer.FirstName = req.body.FirstName;
    registerPennarSalesEngineer.LastName = req.body.LastName;
    registerPennarSalesEngineer.Address = req.body.Address;
    registerPennarSalesEngineer.Email = req.body.Email;
    registerPennarSalesEngineer.MobileNumber = req.body.MobileNumber;
    registerPennarSalesEngineer.PANNumber = req.body.PANNumber;
    registerPennarSalesEngineer.AdharNumber = req.body.AdharNumber;
    registerPennarSalesEngineer.Password = req.body.Password;
    registerPennarSalesEngineer.save((err, doc) => {
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

//deny Pennar Sales Engineer
router.delete('/:id',(req,res)=>
{
    if(!ObjectId.isValid(req.params.id))
   return res.status(400).send(`No Record with given id :  ${req.params.id}`);

   RegisterPennarSalesEnginner.findByIdAndRemove(req.params.id,(err,doc)=>
   {
    if(!err){ res.send(doc);}
    else{ console.log("Error in Deleting Pennar Sales Engineer : " + JSON.stringify(err,undefined,2));}
   });
});


module.exports = router;