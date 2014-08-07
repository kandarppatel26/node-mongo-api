var mongoose = require('mongoose');
var ProductModel = mongoose.model('Product');

exports.index = function (req,res,next){
      res.render('index');
};

exports.productlist = function (req,res,next){
      res.render('productlist');
};

exports.productdetail = function (req,res,next){
      res.render('productdetail');
};


exports.products = function (req,res,next){
    return ProductModel.find(function (err, products) {
        if (!err) {
           return res.send(products);
        } else {
           return console.log(err);
        }
    });
};


exports.productsDetails = function (req,res,next){
     ProductModel.findById( req.params.id, function (err,product){
        if (!err) {
           return res.send(product);
        } else {
           return console.log(err);
        }

     });

};

exports.productsInsert = function (req,res,next){
    var product;
    console.log("POST: ");
    console.log(req.body);
    product = new ProductModel({
        title: req.body.title,
        description: req.body.description,
        style: req.body.style,
    });

    product.save(function (err) {
        if (!err) {
          return console.log("created");
       } else {
          return console.log(err);
       }
    });

  return res.send(product);
};

exports.productsPut = function (req,res,next){
    return ProductModel.findById(req.params.id, function (err, product) {
               product.title = req.body.title;
               product.description = req.body.description;
               product.style = req.body.style;
    return product.save(function (err) {
      if (!err) {
        console.log("updated");
      } else {
        console.log(err);
      }
      return res.send(product);
    });
  });
};

exports.productsDelete = function (req,res,next){
    return ProductModel.findById(req.params.id, function (err, product) {
          return product.remove(function (err) {
              if (!err) {
                  console.log("removed");
                  return res.send('');
              } else {
                  console.log(err);
              }
          });
    });
};