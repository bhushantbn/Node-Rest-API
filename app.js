import express from "express";
import connectDB from "./db/db";
import products_routes from "./routes/products";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Routes
app.use("/api/products", products_routes);

app.get("/", (req, res) => {
  res.send("Hi, this is a Node.js application");
});

// ✅ Remove app.listen()
// ✅ Connect to DB when API is called
connectDB()
  .then(() => console.log("Database connected successfully"))
  .catch((error) => console.log("Database connection error:", error));

export default app; // ✅ Export the app
