import { Router } from "express";
const router = Router();
import Product from "../models/product.js"; // ✅ Correct import
import {
  getAllProducts,
  getAllProductsTesting,
} from "../controllers/products.js";

router.route("/").get(getAllProducts);
router.route("/testing").get(getAllProductsTesting);

router.delete("/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id); // ✅ Correct usage
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json({ message: "Product deleted successfully", product });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Internal Server Error", details: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    }); // ✅ Correct usage

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json({ message: "Product updated successfully", product });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Internal Server Error", details: error.message });
  }
});

export default router;
