const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

var registerDealerSchema = new mongoose.Schema({ 
     id : { type : String },
     DealerId:{type:String},

     CreatedDate : { type : String },

     ModifiedDate : { type : String },
     
     IsActive : { type : String },

    DealerName: {
        type: String,
        // required: 'Full name can\'t be empty'
    },
    Address:{
        type: String,
        // required : 'Address can\'t be empty'
    },
    Email : {
        type: String,
        // required : 'Email can\'t be empty',
        // unique: true
    },
    ContactNumber: {
        type:String,
        // required : 'Contact Number can\'t be empty',
    },
    City: {
        type: String,
        // required : 'City Name can\'t be empty'
    },
    State: {
        type: String,
        // required : 'State Name can\'t be empty'
    },
    ContactKeyPerson: {
        type: String,
        // required : 'Contact Key Person field can\'t be empty'
    },
    ContactKeyPersonName: {
        type: String,
        // required : 'Contact Key Person Name can\'t be empty'
    },
    ContactKeyPersonMobileNumber:{
        type: String,
        // required : 'Contact Key Person Mobile Number can\'t be empty'
    },
    GSTnumber: {
        type: String,
        // required : 'GST Number Filed can\'t be empty'
    },
    PANnumber: {
        type: String,
        // required : 'PAN Number Field Can\'t be Empty'
    },
    OtherDetails: {
        type: String,
        // required : 'This Field Can\'t be Empty'
    },
    AreaOfOperation: {
        type: String,
        // required : 'This Field Can\'t be Empty'
    },
    EmployeeStrength: {
        type: String,
        // required : 'Employee Strength Field Can\'t be Empty'
    },
    AnyOtherInfo1: {
        type: String,
        // required : 'This Field Can\'t be Empty'
    },
    AnyOtherInfo2: {
        type: String,
        // required : 'This Field Can\'t be Empty'
    }
});

// Custom validation for email
registerDealerSchema.path('Email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,13}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');
 
mongoose.model('RegisterDealer', registerDealerSchema, 'RegisterDealer');