import { model, Schema } from "mongoose";

interface Product {
  name: string;
  price: number;
  category: string;
  stock: number;
  timestamp: Date;
}

const productSchema = new Schema<Product>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  stock: { type: Number, required: true },
  timestamp: true,
});

export const Product = model<Product>("Product", productSchema);
