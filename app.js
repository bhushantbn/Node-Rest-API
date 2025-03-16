import express from "express";
import connectDB from "./db/db.js";
import productsRoutes from "./api/products.js"; // ✅ Updated Path
import {dotenv} from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // ✅ Allow JSON Parsing
app.use("/api/products", productsRoutes);

app.get("/", (req, res) => {
  res.send("Hi, this is a Node.js application deployed on Vercel.");
});

const start = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Application running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
