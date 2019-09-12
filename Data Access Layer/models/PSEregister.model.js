
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

var registerPennarSalesEnggSchema = new mongoose.Schema({
    id : { type : String },
     PennarSalesEnggId:{type:String},

     CreatedDate : { type : String },

     ModifiedDate : { type : String },
     
     IsActive : { type : String },

     Status : { type:Boolean, default:false},

     
    FirstName: {
        type: String,
        required: 'Full name can\'t be empty'
    },
    LastName: {
        type: String,
        required: 'Last Name can\'t be empty',
    },
    Address: {
        type: String,
        required: 'Address can\'t be empty'
    },
    Email: {
        type: String,
        required: 'Email can\'t be empty',
        unique: true
    },
    MobileNumber: {
        type: String,
        required: 'Full name can\'t be empty',
        // unique: true
    },
    PANNumber: {
        type: String,
        required: 'PAN Number can\'t be empty',
        unique: true
    },
    AdharNumber: {
        type: String,
        required: 'Adhar Card can\'t be empty'
    },
    Password: {
        type: String,
        required: 'Password can\'t be empty',
        minlength: [4, 'Password must be atleast 4 character long']
    },
    saltSecret: String
});

// Custom validation for email
registerPennarSalesEnggSchema.path('Email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

// Events
registerPennarSalesEnggSchema.pre('save', function (next) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.Password, salt, (err, hash) => {
            this.Password = hash;
            this.saltSecret = salt;
            next();
        });
    });
});

//Third paramater is an name of the database
mongoose.model('RegisterPennarSalesEnginner', registerPennarSalesEnggSchema , 'RegisterPennarSalesEnginner');

