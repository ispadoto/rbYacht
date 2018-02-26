const {
  body,
  validationResult
} = require('express-validator/check');
const {
  sanitizeBody
} = require('express-validator/filter');
var cookieParser = require('cookie-parser');
var Book = require('../models/book');

exports.index = function(req, res, next) {

  var cookieLang = req.cookies.rblocale;

  if (cookieLang === undefined) {
    // no: set a new cookie
    var cookieLangl = 'pt-BR';
    res.cookie('rblocale', cookieLangl, {
      expire: new Date() + 9999
    });
  }
  req.i18n.setLocale(req.cookies.rblocale);

  var ret = {
    welcome: req.i18n.__('welcome'),
    next_boat: req.i18n.__('next_boat'),
    intro: req.i18n.__('intro'),
    language: req.cookies.rblocale
  }

  res.render('index', ret);
};

// Display list of all books.
exports.book_list = function(req, res) {
  res.send('NOT IMPLEMENTED: Book list');
};

// Display detail page for a specific book.
exports.book_detail = function(req, res) {
  res.send('NOT IMPLEMENTED: Book detail: ' + req.params.id);
};

// Display book create form on GET.
exports.book_create_get = function(req, res) {
  res.send('NOT IMPLEMENTED: Book create GET');
};

// Handle book create on POST.
exports.book_create_post = function(req, res) {
  res.send('NOT IMPLEMENTED: Book create POST');
};

// Display book delete form on GET.
exports.book_delete_get = function(req, res) {
  res.send('NOT IMPLEMENTED: Book delete GET');
};

// Handle book delete on POST.
exports.book_delete_post = function(req, res) {
  res.send('NOT IMPLEMENTED: Book delete POST');
};

// Display book update form on GET.
exports.book_update_get = function(req, res) {
  res.send('NOT IMPLEMENTED: Book update GET');
};

// Handle book update on POST.
exports.book_update_post = function(req, res) {
  res.send('NOT IMPLEMENTED: Book update POST');
};
