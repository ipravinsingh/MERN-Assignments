const express = require("express");
const dotenv = require("dotenv");
const app = express();
app.use(express.json());
dotenv.config({ path: "./.env" });

const mainRouter = require("./routes/index");
app.use("/api", mainRouter);








app.use("/api", (req, res) => {
  res.send({
    data: "Ok",
  });
});
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("Listening on port 4000");
});
