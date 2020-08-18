// import mongoose from "mongoose";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// User  Schema
const PostsSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Post = mongoose.model("post", PostsSchema);
