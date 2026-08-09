const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  image: {
    type: String,
  },
  role: {
    type: String,
  },
});

const userModel = model("user", userSchema, "user");
module.exports = userModel;
