import { Product } from "../models/productModel";

class ProductService {
  public static async addProduct() {
    return await Product.create({
      name: "mouse",
      price: 123,
      category: "ele",
      stock: 2,
    });
  }

  public static async listProduct() {
    return await Product.find();
  }
}

export default ProductService;
