import { Schema, model } from "mongoose";

const productSchema = new Schema({
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

export default model("Product", productSchema);
