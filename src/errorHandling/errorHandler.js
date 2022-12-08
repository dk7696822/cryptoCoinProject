function errorHandle(error, res) {
  if (
    error.name == "ValidationError" ||
    error.code == 11000 ||
    error.name === "TokenExpiredError" ||
    error.name == "CastError"
  ) {
    return res.status(400).send({ status: false, message: error.message });
  }
  return res.status(500).send({ status: false, message: error.name });
}
module.exports = errorHandle;
