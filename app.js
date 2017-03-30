const express = require('express'),
	  app = express(),
	  ejs = require('ejs'),
	  bodyParser = require('body-parser'),
	  expressSanitizer = require('express-sanitizer'),
	  indexRoutes = require('./routes/index');

// Setup	  
app.use(express.static(__dirname + '/public'));
app.use(expressSanitizer());
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

// Routes
app.use("/", indexRoutes);

// Start server
app.listen(3000, () => {
	console.log('Server has started');
});