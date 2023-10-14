const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: String,
});

// Model
const User = mongoose.model("User", userSchema);
module.exports.User = User;
