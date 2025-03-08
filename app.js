const express = require("express");
require("dotenv").config();
const connectDB = require("./db/db");

const app = express();
const PORT = process.env.PORT || 5000;
const products_routes = require("./routes/products");

app.use("/api/products", products_routes);

app.get("/", (req, res) => {
  res.send("Hi, this is a Node.js application");
});
const start = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Application connected at port number ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();