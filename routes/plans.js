var express = require('express');
var router = express.Router();

// Require controller modules.
var plans_controller = require('../controllers/plansController');


// **************************************************
// ** All routes starts in www.[domain].xxx/plans  **
// **************************************************

// GET all plans
router.get('/list', plans_controller.plans);

router.get('/prices', plans_controller.prices);


module.exports = router;
