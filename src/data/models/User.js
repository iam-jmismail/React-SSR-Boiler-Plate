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
    required: true,
  },
  joined: {
    type: Date,
    default: Date.now,
  },
});

module.exports = User = mongoose.model("User", UserSchema);
