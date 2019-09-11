const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');

var DealerSalesEnggLoginDetail = mongoose.model('DealerSalesEnggLoginDetail');

passport.use(
    new localStrategy({ usernameField: 'DSEemail', passwordField: 'DSEpassword' },
        (username, password, done) => {
            DealerSalesEnggLoginDetail.findOne({ DSEemail: username },
                (err, dealerSalesEnggLoginDetail) => {
                    if (err)
                        return done(err);
                    // unknown user
                    else if (!dealerSalesEnggLoginDetail)
                        return done(null, false, { message: 'Email is not registered' });
                    // wrong password
                    else if (!dealerSalesEnggLoginDetail.verifyPassword(password))
                        return done(null, false, { message: 'Wrong password.' });
                    // authentication succeeded
                    else
                        return done(null, dealerSalesEnggLoginDetail);
                });
        })
);



