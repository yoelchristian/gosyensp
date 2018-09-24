var Product = require("../models/Product.js");

module.exports = {
    find: function(req, res) {
      Product.find().then(function(dbGosyensp) {
          res.json(dbGosyensp);
      }).catch(function(err) {
          res.json(err);
      })
    },

    findById: function(req, res) {
      Product.findById(req.params.id).then(function(dbGosyensp) {
        res.json(dbGosyensp);
      }).catch(function(err) {
        res.json(err);
      })
    }
};