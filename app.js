// mongoose setup
require( './db');


var express = require("express");
var path = require("path");
var app     = express();
var routes  = require( './routes');
var engine  = require('ejs-locals');


app.engine('ejs',engine);
app.set('views', path.join( __dirname, 'views'));
app.set('view engine', 'ejs' );
app.use(express.favicon());
app.use(express.static( path.join( __dirname, 'public' )));
app.use(express.cookieParser());
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);



app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));


app.get('/', routes.index);
app.get('/api/products',routes.products);
app.get('/api/product/id/:id',routes.productsDetails);
app.post('/api/products', routes.productsInsert);
app.put('/api/products/:id',routes.productsPut);
app.delete('/api/products/:id',routes.productsDelete);


app.get('/partials/productlist', routes.productlist);
app.get('/partials/productdetail', routes.productdetail);


// Launch server
app.listen(4242);