import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
  name: {
    type: String,
  },
  price: {
    type: Number
  },
  amount: {
    type: Number
  },
  detail: {
    type: String
  },
  image: {
    type: String
  }
});

const Product = mongoose.model("Product", productSchema);
export default Product;