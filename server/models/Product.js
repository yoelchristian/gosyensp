const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const productSchema = new Schema({
//     category: { type: String, require: true },
//     productName: { type: String, require: true },
//     qtyInStock: { type: Number, require: true },
//     price: { type: Number, require: true }
// });

const productSchema = new Schema({
  prodId: { type: String, require: true },
  prodName: { type: String, require: true },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
