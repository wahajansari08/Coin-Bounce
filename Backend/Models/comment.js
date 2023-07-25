const mongoose = require("mongoose");

const { Schema } = mongoose;

const commentSchema = new Schema(
  {
    content: { type: String, required: true },
    blog: { type: mongoose.schemaTypes.ObjId, ref: "blogs" },
    author: { type: mongoose.schemaTypes.ObjId, ref: "users" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment", commentSchema, "comments");
