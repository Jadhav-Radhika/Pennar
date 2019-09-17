
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

var PresentTreatmentDetailsSchema = new mongoose.Schema({
    id : { type : String },
     SupplierId:{type:String},

     CreatedDate : { type : String },

     ModifiedDate : { type : String },
     
     IsActive : { type : String },

     Status : { type:Boolean, default:false},

     
    SupplierName: {
        type: String,
        //required: 'Supplier name can\'t be empty'
    },
    ProductName1: {
        type: String,
        //required: 'Product Name can\'t be empty',
    },
    Dosage1: {
        type: String,
        //required: 'This Field can\'t be empty'
    },
    Price1: {
        type: String,
        //required: 'Price Field can\'t be empty',
    },
    Function1: {
        type: String,
        //required: 'Function Field can\'t be empty',
    },
    ProductName2: {
        type: String,
        //required: 'Product Number can\'t be empty',
    },
    Dosage2: {
        type: String,
        //required: 'Dosage Field can\'t be empty'
    },
    Price2: {
        type: String,
        //required: 'This Field can\'t be empty',
    },
    Function2: {
        type: String,
        //required: 'Function Field can\'t be empty',
    },
    ProductName3: {
        type: String,
        //required: 'Product Number can\'t be empty',
    },
    Dosage3: {
        type: String,
        //required: 'Dosage Field can\'t be empty'
    },
    Price3: {
        type: String,
        //required: 'This Field can\'t be empty',
    },
    Function3: {
        type: String,
        //required: 'Function Field can\'t be empty',
    },
    ProductName4: {
        type: String,
        //required: 'Product Number can\'t be empty',
    },
    Dosage4: {
        type: String,
        //required: 'Dosage Field can\'t be empty'
    },
    Price4: {
        type: String,
        //required: 'This Field can\'t be empty',
    },
    Function4: {
        type: String,
        //required: 'Function Field can\'t be empty',
    },
});



//Third paramater is an name of the database
mongoose.model('PresentTreatmentDetail', PresentTreatmentDetailsSchema , 'PresentTreatmentDetail');

