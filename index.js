import express from "express";
import cors from "cors";
import connectDB from "./db/db.js";
import productsRoutes from "./api/products.js";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000; // ✅ Define PORT properly

// ✅ Use CORS Middleware
app.use(cors());

// ✅ Middleware
app.use(express.json());
app.use("/api/products", productsRoutes);

// ✅ Default Route
app.get("/", (req, res) => {
  res.send("Hi, this is a Node.js application deployed on Vercel.");
});

// ✅ Start the Server
const start = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();

export default app;
