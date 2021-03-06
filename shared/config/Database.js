const mongoose = require("mongoose");
//const keys = require("./Keys");
require('dotenv').config()

const config = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

mongoose.connect(process.env.mongoURI, config, () => {
  console.log("connected to mongo db");
});

const db = mongoose.connection;

db.on('connected', () => {
  console.log('Mongoose is connected!');
});

db.on('error', () => {
  console.log('Connection Error!');
});