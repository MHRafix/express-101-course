const express = require("express");
const port = process.env.PORT || 5000;
const fs = require("fs");

const app = express();

// main entry point
app.get("/", (req, res) => {
  fs.readFile("./pages/index.html", (err, data) => {
    if (err) {
      console.log("Error", err);
      res.send("Something went wrong!");
    } else {
      res.write(data);
      res.end();
    }
  });
});

app.get("/about", (req, res) => {
  res.send("This is about page!");
});

// server listener here
app.listen(port, () => {
  console.log("Server is runnig...!");
});

// handler demo
// function handler(req, res) {
// read req obj
// process request
// send response result
// }
