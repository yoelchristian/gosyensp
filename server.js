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

app.use(router);

const db = process.env.MONGODB_URI || "mongodb://localhost/gosyensp";
mongoose.connect(db, function(error) {
    if (error) throw error;
    console.log("DB connection successful")
});

app.listen(PORT, function() {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
});