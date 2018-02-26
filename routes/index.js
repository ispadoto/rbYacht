var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.query.lang != undefined){
    console.log('#######################  '+ req.query.lang);
    var newLang = JSON.parse(req.query.lang);
    console.log('########   NEW LANG   ###############  ' + newLang + ' the value ' + newLang.item);
    res.cookie('rblocale', newLang.item, {
      expire: new Date() + 9999
    });
    req.i18n.setLocale(req.query.lang);
  }
  res.redirect('/catalog');

});

router.get('/plans', function(req, res, next) {
  res.redirect('/plans/list');
});

module.exports = router;
