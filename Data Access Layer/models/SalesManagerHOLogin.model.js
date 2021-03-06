
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

var registerSalesManagerHoSchema = new mongoose.Schema({
    FullName: {
        type: String,
        required: 'Full name can\'t be empty'
    },
    Email: {
        type: String,
        required: 'Email can\'t be empty',
        unique: true
    },
    Password: {
        type: String,
        required: 'Password can\'t be empty',
        minlength: [4, 'Password must be atleast 4 character long']
    },
    saltSecret: String
});

// Custom validation for email
// RegisterSalesManagerHo.path('Email').validate((val) => {
//     emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return emailRegex.test(val);
// }, 'Invalid e-mail.');

// Events
registerSalesManagerHoSchema.pre('save', function (next) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.Password, salt, (err, hash) => {
            this.Password = hash;
            this.saltSecret = salt;
            next();
        });
    });
});

//Third paramater is an name of the database
mongoose.model('RegisterSalesManagerHo', registerSalesManagerHoSchema, 'RegisterSalesManagerHo');

