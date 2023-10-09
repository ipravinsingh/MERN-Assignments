const express = require("express");

const app = express();
app.use(express.json());

// Assignment_1
app.get("/randomNo", (req, res) => {
  res.send("4"); // random no between 1 to 6..
});

// Assignment_2.1
app.post("/sum", (req, res) => {
  //   console.log(req.body);
  res.json({
    sumResult: req.body.a + req.body.b + req.body.c,
  });
});

// Assignment_2.2
app.post("/avg", (req, res) => {
  console.log(req.body);
  res.json({
    avg: (req.body.a + req.body.b + req.body.c) / 3,
  });
});

app.listen(4000, () => {
  console.log("listning on port 4000");
});
