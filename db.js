mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Product = new Schema({
    title: {type: String, required: true},  
    description: {type: String, required: true},  
    style: {type: String, unique: true},  
    modified: {type: Date, default: Date.now}
});

var ProductModel = mongoose.model('Product', Product);

mongoose.connect('mongodb://localhost/ecomm_database');