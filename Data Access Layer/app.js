require('./config/config');
require('./models/db');
require('./config/PassportConfiguration');
require('./config/DSEpassportConfig');

const { mongoose } = require('./models/db');
//admin module controllers
var productDetailsController = require('./controllers/ProductDetailsController');
var priceDetailsController = require('./controllers/PriceDetailsController');
//productsControler
var biodisperantProductController = require('./controllers/BiodisperantProductController');
var biocideProductController = require('./controllers/BiocideProductController');
var copperCorrosionProductController = require('./controllers/CopperCorrosionProductController');

//Customer Details Controller (Dealer Sales Engg)
var customerDetailsController = require('./controllers/customerDetailsController');
//Register Dealer Sales Enginee Controller
var registerDealerSalesEnggController = require('./controllers/DSEregisterController');
var registerPennarSalesEnggController = require('./controllers/PSEregisterController');
var registerDealerController = require('./controllers/DealerRegisterController');

//Pennar Sales Engineer Controller
// var transactinDataController = require('./controllers/TransactionScreenController');
var presentTreatmentDetailController = require('./controllers/PresentTreatmentDetailController');
var proposalDataController =  require('./controllers/ProposalDetailsController');

//Dealer Controller 
var dealerCustomerDetailsController = require('./controllers/DealersCustomerDetailController');
var dealerSalesEnggController = require('./controllers/DealersSalesEnggController');

//Sales Engineer Congtrioller
var salesManagerHoLoginController = require('./controllers/SalesManagerHOLoginController');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');

const rtsIndex = require('./routes/index.router');

var productDetailsController = require('./controllers/ProductDetailsController');

var app = express();

// middleware
app.use(bodyParser.json());
//allows request from any port number or domain 
app.use(cors({origin: 'http://localhost:4200'}));
app.use(passport.initialize());
app.use('/api', rtsIndex);

// error handler
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
    else{
        console.log(err);
    }
});

//Admin Module
app.use('/productDetails', productDetailsController);
app.use('/BiodisperantProduct' , biodisperantProductController);
app.use('/BiocideProduct' , biocideProductController);
app.use('/CopperCorrosionProduct' , copperCorrosionProductController);
//Price modification URL
app.use('/priceDetails', priceDetailsController);
//add customer Details of PSE 
app.use('/CustomerDetails', customerDetailsController);
//Register Dealer Sales Engg
app.use('/RegisterDealerSalesEngineer', registerDealerSalesEnggController);
//Pennar Sales Engineer
app.use('/RegisterPennarSalesEngineer', registerPennarSalesEnggController);
// app.use('/TransactionDataScreen', transactinDataController );
app.use('/PresentTreatmentDetail', presentTreatmentDetailController);
app.use('/ProposalDetails', proposalDataController );


//Dealer
app.use('/RegisterDealer', registerDealerController);
//add customer Details of Dealer 
app.use('/DealersCustomerDetails', dealerCustomerDetailsController);
//add new dealers sales Engg
app.use('/AddDealersSalesEngg', dealerSalesEnggController);

//Sales Manager Ho
app.use('/RegisterSalesManagerHo', salesManagerHoLoginController);

// start server
app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));