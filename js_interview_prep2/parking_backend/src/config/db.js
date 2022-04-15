require("dotenv").config();

const mongoose = require("mongoose");

const connectString = `${process.env.MongoURI}`;

module.exports = () => {
    mongoose.connect(connectString);
}
