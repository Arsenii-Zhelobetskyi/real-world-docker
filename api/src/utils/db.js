const mongoose = require("mongoose");
const { MONGO_URL } = require("./../configuration");

module.exports.connectDB = () => {
  mongoose.connect(MONGO_URL, { useNewUrlParser: true });
  return mongoose.connection;
};
