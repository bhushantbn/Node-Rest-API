import express from "express";
import cors from "cors";
import connectDB from "./db/db.js";
import productsRoutes from "./api/products.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();

// ✅ Use CORS Middleware
app.use(
  cors({
    origin: "*", // Allow all origins (you can restrict it to specific origins)
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
  })
);

// Middleware
app.use(express.json());
app.use("/api/products", productsRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Hi, this is a Node.js application deployed on Vercel.");
});

// ✅ Connect DB before exporting app
await connectDB().then(() => console.log("MongoDB connected successfully!"));
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
