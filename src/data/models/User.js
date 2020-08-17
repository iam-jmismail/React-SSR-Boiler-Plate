// import mongoose from "mongoose";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// User  Schema
const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    unique: true,
    required: true,
  },
});

module.exports = User = mongoose.model("User", UserSchema);
