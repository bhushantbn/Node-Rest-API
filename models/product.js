const mongoose = require("mongoose");
require("dotenv").config();

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: [true, "Price must be provided"] },
  featured: { type: Boolean, default: false },
  rating: { type: Number, default: 3.0 },
  company: {
    type: String,
    enum: {
      values: [
        "apple",
        "samsung",
        "oneplus",
        "xiaomi",
        "google",
        "sony",
        "asus",
        "realme",
        "motorola",
      ],
      message: `{VALUE} is not supported.`,
    },
  },
});

module.exports = mongoose.model("Product", productSchema);
