// app.js

var express = require('express');
var bodyParser = require('body-parser');

var product = require('./routes/product'); // Imports routes for the products
var app = express();


// Set up mongoose connection
var mongoose = require('mongoose');
mongoose.connect(
    "mongodb://127.0.0.1:27017/crud",
    {
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    },
    (err, db) => {
      if (err) {
        return console.log(err);
      } else {
        return console.log("database connected!");
      }
    }
  );

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);

var port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
