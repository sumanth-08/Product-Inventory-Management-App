import { model, Schema } from "mongoose";
import { ProductType } from "../utils/types";

const productSchema = new Schema<ProductType>(
  {
    name: { type: String, required: true, minLength: 3 },
    price: { type: Number, required: true, min: 1 },
    category: { type: String, required: true },
    stock: { type: Number, required: true, min: 0 },
  },
  { timestamps: true }
);

export const Product = model<ProductType>("Product", productSchema);
