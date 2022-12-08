const Crypto = require("../models/cryptoModel");
const mongoose = require("mongoose");
require("dotenv").config();

mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
  })
  .then(() => console.log("Mongo DB is connected"))
  .catch((err) => console.log(err.message));

const deleteData = async () => {
  try {
    await Crypto.deleteMany();
    console.log("Data deleted successfully");
  } catch (err) {
    console.log(err);
  }
};

if (process.argv[2] === "--delete") {
  deleteData();
}
