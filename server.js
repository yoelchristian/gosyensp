const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

const PORT = process.env.PORT || 3007;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("client/build"));

var gosyenspController = require("./server/controllers/gosyenspController.js");
var router = new express.Router();

router.get("/api/products", gosyenspController.find);
router.get("/api/products/:id", gosyenspController.findById);
router.get("/api/products/category/:category", gosyenspController.findByCategory);
router.get("/api/products/subcategory/:subcategory", gosyenspController.findBySubcategory);
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.use(router);

//GANTI INI DB
const db = process.env.DB_URI || "mongodb://localhost/harrier-catalog";
mongoose.connect(db, function(error) {
    if (error) throw error;
    console.log("DB connection successful")
});

app.listen(PORT, function() {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
});

// const axios = require("axios");
// let authOptions = {
//   method: "get",
//   async: true,
//   url: "https://www.wylerguitars.com/api/products",
//   crossDomain: true,
//   data: {
//     "external_id": "awd",
//     "payer_email": "Awd",
//     "description": "awd",
//     "amount": 18000,
//     "should_send_email": false,
//   },
//   headers: {
//     "Authorization": "process.env.XENDIT_APIKEY",
//     "Content-Type": "application/json",
//   }
// }

// axios(authOptions).then(res => {
//   console.log(res.data)
// }).catch(err => console.log(err))