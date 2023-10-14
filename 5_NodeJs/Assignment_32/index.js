// xUugYpRBV1DLrg45
const mongoose = require("mongoose");

const mongoUri =
  "mongodb+srv://praveen:xUugYpRBV1DLrg45@cluster0.oxrinhq.mongodb.net/?retryWrites=true&w=majority";

try {
  mongoose.connect(mongoUri);
} catch (e) {
  console.log(e);
}
