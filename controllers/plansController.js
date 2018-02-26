const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

// declare models

exports.prices = function(req, res) {
    // get model data
    res.render('pricelist');
};

exports.plans = function(req, res) {
    // get model data
    res.render('listplans');
};
