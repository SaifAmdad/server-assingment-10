const mongoose = require("mongoose");
const { dbLink } = require("../secrets");

const connectDB = async () => {
  try {
    await mongoose.connect(dbLink);
    console.log("DB Connected Successfully !");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
