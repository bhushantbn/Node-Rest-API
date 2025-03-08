require("dotenv").config();

const connectDB = require("./db/db");
const product = require("./models/product");
const productJson = require("./data.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    await product.create(productJson);
    console.log("Success...");
  } catch (error) {
    console.log(error);
  }
};
start();
