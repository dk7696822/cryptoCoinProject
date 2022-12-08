const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const router = require("./routes/route");
app.use(express.json());

mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
  })
  .then(() => console.log("Mongo DB is connected"))
  .catch((err) => console.log(err.message));
app.use("/", router);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
