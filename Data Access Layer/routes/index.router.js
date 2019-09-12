const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/AdminController');
// Dealer Sales Engineer controoler
const ctrDealerSalesEngg = require('../controllers/DSE.controller');
//Register Dealer Sales Engineer
// const ctrRegisterDealerSalesEngg = require('../controllers/DSEregisterController');

//Register Pennar Sales Engineer
const ctrRegisterPennarSalesEngg = require('../controllers/PSEregisterController');

//Login Sales Manger HO
// const ctrRegisterSalesManagerHo = require('../controllers/SalesManagerHOLoginController');

const jwtHelper = require('../config/jwtHelper');
const DSEjwtHelper = require('../config/DSEjwtHelper');

//Admin Routes
router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
//  router.get('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);
 router.get('/adminDashboard', jwtHelper.verifyJwtToken, ctrlUser.adminDashboard);



// Dealer Sales Engineer Login Routes
router.post('/RegisterDealerSalesEngg', ctrDealerSalesEngg.RegisterDealerSalesEngg); 
// router.post('/RegisterDealerSalesEngineer', ctrRegisterDealerSalesEngg.RegisterDealerSalesEngineer);
router.post('/authenticateDealerSalesEngg', ctrDealerSalesEngg.authenticate);//
router.get('/DealerSalesEnggDashboard',DSEjwtHelper.verifyJwtToken, ctrDealerSalesEngg.DealerSalesEnggDashboard);

//Sales Manager Ho
//  router.post('/RegisterSalesManagerHo', ctrRegisterSalesManagerHo.RegisterSalesManagerHo);

//Pennar Sales Engineer Routes
//router.post('/RegisterPennarSalesEngineer', ctrRegisterPennarSalesEngg.RegisterPennarSalesEngineer);
//router.get('/RegisterPennarSalesEngineer', DSEjwtHelper.verifyJwtToken,ctrRegisterPennarSalesEngg.RegisterPennarSalesEngineer);


//Dealer 
// router.post('/RegisterDealer', ctrDealerSalesEngg.RegisterDealerSalesEngg);

module.exports = router;



