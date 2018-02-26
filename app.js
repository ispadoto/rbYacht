var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var I18n = require('i18n-2');

// routes
var index = require('./routes/index');
var users = require('./routes/users');
var catalog = require('./routes/catalog');
var plans = require('./routes/plans.js');

var app = express();

// database connection
//Set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = 'mongodb://rbyacht:yachtrb@ds247178.mlab.com:47178/rbyacht_db';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

I18n.expressBind(app, {
		locales: ['en-EN', 'pt-BR', 'es-ES', 'fr-FR'],
		cookieName: 'rblocale'
	});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/catalog', catalog);
app.use('/plans', plans);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
