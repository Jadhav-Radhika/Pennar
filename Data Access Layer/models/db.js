const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, (err) => {
    if (!err) { console.log('MongoDB connection succeeded.'); }
    else { console.log('Error in MongoDB connection : ' + JSON.stringify(err, undefined, 2)); }
});


//this user model is required in Log in Form 
require('./Admin.model');
require('./DSEUser.model');
// require('./DealerSalesEngg/DSEregister.model');

//Add model for Dealer Sales Engineer Registration
require('./DSEregister.model');
//Add model for Registration of pennar sales engg
require('./PSEregister.model');
require('./PresentTreatmentDetail.model');

//Add model for Registration of Sales Manager Ho
require('./SalesManagerHOLogin.model');

//Add DealerRegister Model
require('./DealerRegister.model');
require('./DealersSalesEngg.model');

module.exports = mongoose;
