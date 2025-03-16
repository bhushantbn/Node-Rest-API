import { Router } from "express";
const router = Router();
import { findByIdAndDelete, findByIdAndUpdate } from "../models/product.js"; // ✅ Ensure Product model is imported
import { getAllProducts, getAllProductsTesting } from "../controllers/products.js";

router.route("/").get(getAllProducts);
router.route("/testing").get(getAllProductsTesting);

router.delete("/:id", async (req, res) => {
  try {
    const product = await findByIdAndDelete(req.params.id); // ✅ Use Product, not product
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
    const product = await findByIdAndUpdate(
      req.params.id,
      req.body, // ✅ Update with request body
      { new: true, runValidators: true } // ✅ Return updated document
    );
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
