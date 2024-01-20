const mongoose = require("mongoose");
const db_connect = async () => {
  try {
    if (process.env.mode === "production") {
      await mongoose.connect(process.env.Db_Live_Url);
      console.log("production db connected");
    } else {
      await mongoose.connect(process.env.Db_Local_Url);
      console.log("local db connected");
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = db_connect;
