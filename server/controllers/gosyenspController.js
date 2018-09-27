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
    },

    findByCategory: function(req, res) {
      var searchParams = req.params.category.toLowerCase().replace(/([^a-z]|^)([a-z])(?=[a-z]{2})/g, function(_, g1, g2) {
        return g1 + g2.toUpperCase(); } );

      Product.find({model_name: RegExp(searchParams)}).then(function(dbGosyensp) {
        res.json(dbGosyensp);
      }).catch(function(err) {
        res.json(err);
      })
    },

    findBySubcategory: function(req, res) {
      var searchParams = req.params.subcategory.toLowerCase().replace(/([^a-z]|^)([a-z])(?=[a-z]{2})/g, function(_, g1, g2) {
        return g1 + g2.toUpperCase(); } );

      Product.find({model_name: searchParams}).then(function(dbGosyensp) {
        res.json(dbGosyensp);
      }).catch(function(err) {
        res.json(err);
      })
    }
};