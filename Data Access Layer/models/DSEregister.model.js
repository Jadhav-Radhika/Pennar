// const mongoose = require('mongoose');


// var RegisterDealerSalesEngg = mongoose.model('RegisterDealerSalesEngg',{
//     FirstName: { type: String },
//     LastName: { type: String },
//     Address: { type: String },
//     Email: { type: String },
//     MobileNumber: { type: Number },
//     PANNumber: { type: String },
//     AdharNumber: { type: String },
//     DealerCode: { type: String },
//     Password: { type: String },
//     CreatedDate:{type:Date},
//     ModifiedDate:{type:Date},
//     isActive:{type:Boolean},
// },'RegisterDealerSalesEngg');

    
// module.exports = { RegisterDealerSalesEngg };

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

var DealerSalesEngineerSchema = new mongoose.Schema({ 
     id : { type : String },
     DealerSalesEngggId:{type:String},

     CreatedDate : { type : String },

     ModifiedDate : { type : String },
     
     IsActive : { type : String },

     FirstName: {
        type: String,
        // required: 'Full name can\'t be empty'
    },
    LastName : {
        type: String,
        // required : 'Email can\'t be empty',
        // unique: true
    },
    Address: {
        type: String,
        // required : 'This Field Can\'t be Empty'
    },
    Email : {
        type: String,
        // required : 'Email can\'t be empty',
        // unique: true
    },
    MobileNumber: {
        type: String,
        // required : 'This Field Can\'t be Empty'
    },
    PANNumber : {
        type: String,
        // required : 'Email can\'t be empty',
        // unique: true
    },
    AdharNumber: {
        type: String,
        // required : 'This Field Can\'t be Empty'
    },
    DealerCode : {
        type: String,
        // required : 'Email can\'t be empty',
        // unique: true
    },
    Password: {
        type: String,
        // required : 'This Field Can\'t be Empty'
    },
    SalesManagerHO_Id : {
        type: String,
        // required : 'Email can\'t be empty',
        // unique: true
    },
    DealerApproval: {
        type: String,
        // required : 'This Field Can\'t be Empty'
    },
    PennarSalesManagerApproval : {
        type: String,
        // required : 'Email can\'t be empty',
        // unique: true
    },
    DealerId: {
        type: String,
        // required : 'This Field Can\'t be Empty'
    }
});

// Custom validation for email
DealerSalesEngineerSchema.path('Email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,13}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');
 
mongoose.model('DealerSalesEngineer', DealerSalesEngineerSchema, 'DealerSalesEngineer');