const Crypto = require("../models/cryptoModel");
const axios = require("axios");
const errorHandler = require("../errorHandling/errorHandler");
exports.cryptoCoins = async (req, res) => {
  try {
    req.headers["authorisation"] = `Bearer ${process.env.API_KEY}`;
    let options = {
      method: "get",
      url: "https://api.coincap.io/v2/assets",
    };
    let cryptoData = await axios(options);
    let data = cryptoData.data.data.sort(
      (a, b) => a.changePercent24Hr - b.changePercent24Hr
    );
    await Crypto.create(data);

    return res.status(200).send({ status: true, data });
  } catch (err) {
    return errorHandler(err, res);
  }
};
