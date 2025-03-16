import express from "express";
import connectDB from "./db/db";
import products_routes from "./routes/products";
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

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
